from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Comment, Image, db
from app.forms import ImageForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)
# from app.forms import ImageForm
image_routes = Blueprint('images', __name__)


@image_routes.route('/')
@login_required
def get_images():
    images = Image.query.all()
    return {'images': [image.to_dict() for image in images]}


@image_routes.route('/<int:id>')
@login_required
def get_photos(id):
    image = Image.query.get(id)
    if not image:
        return jsonify('image does not exist')
    return image.to_dict()


@image_routes.route("/new-image", methods=["POST"])
@login_required
def upload_image():
    image = request.files["image"]
    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)
    if "url" not in upload:
        return upload, 400
    url = upload["url"]
    return {'url': url}


@image_routes.route('/new', methods=['POST'])
@login_required
def second_image_loader():
    form = ImageForm()
    new_image = Image()
    form.populate_obj(new_image)
    db.session.add(new_image)
    db.session.commit()
    return new_image.to_dict()


@image_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_photo(id):
    image = Image.query.get(id)
    if not image:
        return jsonify('image does not exist')
    db.session.delete(image)
    db.session.commit()
    return {'id': id}


@image_routes.route('/<int:id>/comments')
@login_required
def get_comments_from_params(id):
    data = request.get_json()  # Assuming comments data is sent as JSON
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    # Assuming Image is your SQLAlchemy model
    image = Image.query.get(id)
    if not image:
        return jsonify({'error': 'Image not found'}), 404
    # Update comments in the image model
    image.comments = data.get('comments', image.comments)
    print(f'Image comments: {image.comments}')
    # Save changes to the database
    db.session.commit()
    return jsonify({'message': 'Comments updated successfully'}), 200

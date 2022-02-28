
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Comment ,Image, db
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)
# from app.forms import ImageForm

image_routes = Blueprint('images', __name__)

@image_routes.route('/', methods=['GET'])
@login_required
def images():
    images = Image.query.all()
    return {'images': [image.to_dict() for image in images]}


@image_routes.route('/<int:id>')
@login_required
def get_photos(id):
    images = Image.query.get(id)
    return images.to_dict()

@image_routes.route("", methods=["POST"])
@login_required
def upload_image():

    image = request.files["image"]

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    new_image = Image(
        title=request.form['title'],
        user_id=current_user.id,
        image=url
    )
    db.session.add(new_image)
    db.session.commit()
    return new_image.to_dict()
    # return {"url": url}


# @image_routes.route('/new', methods=['POST'])
# @login_required
# def complete_picture():

#     form = ImageForm()  # make song form

#     new_picture = Image()

#     form.populate_obj(new_picture)

#     db.session.add(new_picture)
#     db.session.commit()
#     return new_picture.to_dict()

# @image_routes.route('/<int:id>/comments')
# @login_required
# def get_photo_comments(id):
#     comments = Comment.query.filter(Comment.image_id == id).all()
#     return {'comments': [comment.to_dict() for comment in comments]}



@image_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_musician(id):
    image = Image.query.get(id)

    if not image:
        return jsonify('image does not exist')

    db.session.delete(image)
    db.session.commit()
    return {'id': id }

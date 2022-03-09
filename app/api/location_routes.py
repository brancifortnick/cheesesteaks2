from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.forms import LocationForm
from app.models import db, Location, Image
from app.s3_helpers import (
    get_unique_filename, allowed_file, upload_file_to_s3)

location_routes = Blueprint('locations', __name__)


@location_routes.route('/', methods=['GET'])
@login_required
def get_locations():
    locations = Location.query.all()
    return {'locations': [location.to_dict() for location in locations]}


@location_routes.route('/<int:id>', methods=['GET'])
@login_required
def get_location_id(id):
    location = Location.query.get(id)
    return location.to_dict()


# @location_routes.route('/<int:id>/images')
# @login_required
# def locations_images(id):
#     images = Image.query.filter(Image.location_id == id).all()
#     return {'images': [image.to_dict() for image in images]}


@location_routes.route('/new-location', methods=['POST'])
@login_required
def upload_picture():

    profile_img = request.files['profile_img']

    profile_img.filename = get_unique_filename(profile_img.filename)

    upload = upload_file_to_s3(profile_img)

    if 'url' not in upload:
        return upload, 400

    url = upload['url']

    return {'url': url}


@location_routes.route('/new', methods=['POST'])
@login_required
def create_musician():

    form = LocationForm()

    new_location = Location()

    form.populate_obj(new_location)
    db.session.add(new_location)
    db.session.commit()
    return new_location.to_dict()


@location_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_musician(id):
    location = Location.query.get(id)

    if not location:
        return jsonify('Location does not exist')

    db.session.delete(location)
    db.session.commit()
    return {'id': id}


@location_routes.route("/<int:id>/biography", methods=["PUT"])
@login_required
def update_bio(id):
    location = Location.query.get(id)
    location.biography = request.form["biography"]
    db.session.add(location)
    db.session.commit()
    return location.to_dict()

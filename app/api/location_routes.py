from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Location

location_routes = Blueprint('locations', __name__)


@location_routes.route('/', methods=['GET'])
@login_required
def get_locations():
    locations = Location.query.all()
    return {'locations': [location.to_dict() for location in locations]}

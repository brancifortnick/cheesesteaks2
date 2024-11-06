from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Location
def name_exists(form, field):
    location_name = field.data
    location = Location.query.filter(
        Location.location_name == location_name).first()  # look up logic for stronger constraints
    if(location):
        raise ValidationError('Name already exists')
class LocationForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    location_name = StringField('location_name', validators=[
                                DataRequired(), name_exists])
    profile_img = StringField('profile_img')
    biography = StringField('biography')
    address = StringField('address')
    city = StringField('city')
    state = StringField('state')
    zipcode = IntegerField('zipcode')

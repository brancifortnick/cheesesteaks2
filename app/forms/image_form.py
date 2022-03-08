
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Image




class ImageForm(FlaskForm):
    user_id = IntegerField('user_id')
    location_id = IntegerField('location_id')
    image = StringField('image',validators=[
                                DataRequired()])
    title = StringField('title')

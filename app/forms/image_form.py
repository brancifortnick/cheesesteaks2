
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Image




class ImageForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    location_id = IntegerField('image_id', validators=[
                                DataRequired()])
    image = StringField('profile_img')
    title = StringField('title')

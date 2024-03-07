
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Comment


class CommentForm(FlaskForm):
    user_id = IntegerField('user_id')
    image_id = IntegerField('image_id')
    comment = StringField('comment')
    location_id = IntegerField('location_id')

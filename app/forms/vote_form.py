from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
class VoteForm(FlaskForm):
    user_id = IntegerField('user_id')
    location_id = IntegerField('location_id')
    count = IntegerField('count')

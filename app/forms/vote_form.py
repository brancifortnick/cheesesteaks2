from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError



class VoteForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    location_id = IntegerField('location_id', validators=[DataRequired()])
    vote = IntegerField('vote')
    downvote = IntegerField('downvote')

from .db import db
from werkzeug.security import generate_password_hash, check_password_hash


class Vote(db.model):

    __tablename__ = 'votes'

    id = db.Column(db.Integer(), primary_key=True)
    vote = db.Column(db.Integer)
    downvote = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    image_id = db.Column(db.Integer, db.ForeignKey("images.id"))

    users = db.relationship('User', back_populates='votes')
    images = db.relationship('Image', back_populates='votes')


def to_dict(self):
      return {
            'id': self.id,
            'vote':self.vote,
            'downvote':self.downvote,
            'user_id':self.user_id,
            'image_id':self.image_id,
      }

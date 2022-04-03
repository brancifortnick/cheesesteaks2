from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import func


class Image(db.Model):

    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=False)
    image = db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())

    locations = db.relationship('Location', back_populates='images')
    comments = db.relationship('Comment', back_populates='images')
    users = db.relationship('User', back_populates='images')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'image': self.image,
            'user_id': self.user_id,
            'location_id': self.location_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'comments': [comment.id for comment in self.comments]
        }

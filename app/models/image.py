from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import func


class Image(db.Model):

    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50), nullable=True)
    image = db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    location_id = db.Column(db.Integer, db.ForeignKey('locations.id'))
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())

    locations = db.relationship('Location', back_populates='images')
    comments = db.relationship('Comment', back_populates='images')


    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'image': self.image,
            'user_id': self.user_id,
            'location_id': self.location_id,
            "user": self.users.to_dict(),
            'created_at': self.created_at,
            'updated_at': self.updated_at,
        }

from datetime import timezone
from .db import db
from sqlalchemy import func


class Location(db.Model):
    __tablename__ = 'locations'
    id = db.Column(db.Integer, primary_key=True)
    location_name = db.Column(db.String(50), nullable=False, unique=True)
    profile_img = db.Column(db.String(255))
    biography = db.Column(db.String(255))
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    address = db.Column(db.String(255), default='123 Street')
    city = db.Column(db.String(255), nullable=True, default='City')
    state = db.Column(db.String(2), nullable=True, default='NJ')
    zipcode = db.Column(db.Integer(), default='08080', nullable=True)

    users = db.relationship('User', back_populates='locations')
    images = db.relationship('Image', back_populates='locations')
    votes = db.relationship('Vote', back_populates='locations')

    def to_dict(self):
        return {
            'id': self.id,
            'location_name': self.location_name,
            'profile_img': self.profile_img,
            'biography': self.biography,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'user_id': self.user_id,
            'images': [image.to_dict() for image in self.images],
            'address': self.address,
            'city': self.city,
            'state': self.state,
            'zipcode': self.zipcode
        }

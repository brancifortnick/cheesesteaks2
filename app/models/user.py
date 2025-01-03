from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import func
class User(db.Model, UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),
                           nullable=False, server_default=func.now())
    locations = db.relationship('Location', back_populates='users')
    comments = db.relationship('Comment', back_populates='users')
    votes = db.relationship('Vote', back_populates='users')
    images = db.relationship('Image', back_populates='users')
    @property
    def password(self):
        return self.hashed_password
    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)
    def check_password(self, password):
        return check_password_hash(self.password, password)
    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            'locations': [location.id for location in self.locations]
        }

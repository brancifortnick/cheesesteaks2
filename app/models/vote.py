from .db import db
from werkzeug.security import generate_password_hash, check_password_hash


class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    count = db.Column(db.Integer, default=0)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    location_id = db.Column(db.Integer, db.ForeignKey(
        'locations.id'), nullable=False)

    users = db.relationship('User', back_populates='votes')
    locations = db.relationship('Location', back_populates='votes')

    def to_dict(self):
        return {
            'id': self.id,
            'count': self.count,
            'user_id': self.user_id,
            'location_id': self.location_id,
        }

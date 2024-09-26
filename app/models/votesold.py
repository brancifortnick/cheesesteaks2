# from .db import db
# from werkzeug.security import generate_password_hash, check_password_hash
# class Vote(db.Model):
#     __tablename__ = 'votes'
#     id = db.Column(db.Integer(), primary_key=True)
#     vote = db.Column(db.Integer)
#     downvote = db.Column(db.Integer)
#     user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
#     location_id = db.Column(db.Integer, db.ForeignKey("locations.id"))
#     users = db.relationship('User', back_populates='votes')
#     locations = db.relationship('Location', back_populates='votes')
#     def to_dict(self):
#         return {
#             'id': self.id,
#             'vote': self.vote,
#             'downvote': self.downvote,
#             'user_id': self.user_id,
#             'location_id': self.location_id,
#         }

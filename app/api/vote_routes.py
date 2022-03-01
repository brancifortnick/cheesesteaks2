from flask import Blueprint, jsonify, session, request
from app.models import Vote, db, vote
from flask_login import login_required


vote_routes = Blueprint('votes',__name__ )


@vote_routes.route('/')
@login_required
def get_votes():
    votes = Vote.query.all()
    return {'votes': vote.to_dict() for vote in votes}


@vote_routes.route('/<int:id>')
@login_required
def get_vote_ids(id):
    votes = Vote.query.get(id)
    return votes.to_dict()

# @vote_routes.route('/add', methods=['POST'])
# @login_required
# def get_votes():

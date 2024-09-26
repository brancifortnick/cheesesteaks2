from flask import Blueprint, jsonify, session, request
from app.models import Vote, db, Vote
from flask_login import login_required, current_user
from app.forms import VoteForm

vote_routes = Blueprint('votes', __name__)
@vote_routes.route('/')
@login_required
def get_votes():
    votes = Vote.query.all()
    return {'votes': [vote.to_dict() for vote in votes]}
@vote_routes.route('/<int:id>')
@login_required
def get_vote_ids(id):
    votes = Vote.query.get(id)
    return votes.to_dict()
@vote_routes.route('/add', methods=['POST'])
@login_required
def get_new_votes():
    form = VoteForm()
    votes = Vote()
    form.populate_obj(votes)
    db.session.add(votes)
    db.session.commit()
    return votes.to_dict()
# @vote_routes.route('/<int:id>', methods=['PUT'])
# @login_required
# def get_updated_votes(id):
#     update_votes = Vote.query.get(id)
#     update_votes.vote = request.form['vote']
#     db.session.add(update_votes)
#     db.session.commit()
#     return update_votes.to_dict()


@vote_routes.route('/vote', methods=['GET'])
def get_vote():
    vote = Vote.query.first()
    if vote is None:
        vote = Vote(count=0)
        db.session.add(vote)
        db.session.commit()
    return jsonify(vote.to_dict())


@vote_routes.route('/vote', methods=['POST'])
def update_vote():
    data = request.json
    vote = Vote.query.first()
    if vote is None:
        vote = Vote(count=0)
        db.session.add(vote)
        db.session.commit()
    if data['action'] == 'increment':
        vote.count += 1
    elif data['action'] == 'decrement':
        vote.count -= 1
    db.session.commit()
    return jsonify(vote.to_dict())

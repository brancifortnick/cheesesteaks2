from flask import Blueprint, jsonify, session, request
from app.models import Vote, db, Vote
from flask_login import login_required, current_user


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

@vote_routes.route('/add', methods=['POST'])
@login_required
def get_new_votes():
    new_votes = Vote(
        vote = request.form['vote'],
        image_id = request.form['image_id'],
        downvote= request.form['downvote'],
        user_id = current_user.id
    )
    db.session.add(new_votes)
    db.session.commit()
    return new_votes.to_dict()

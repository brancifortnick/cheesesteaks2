from flask import Blueprint, jsonify, session, request
from app.models import Vote, db, Location
from flask_login import login_required, current_user
from app.forms import VoteForm
from sqlalchemy import func

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
@login_required
def update_vote():
    data = request.json
    user_id = data.get('user_id')
    location_id = data.get('location_id')
    action = data.get('action')  # 'increment' or 'decrement'
    vote_type = data.get('vote_type')  # 'up' or 'down'

    if not all([user_id, location_id, action, vote_type]):
        return jsonify({'error': 'Missing required fields'}), 400

    try:
        # Check if user already has a vote for this location
        existing_vote = Vote.query.filter(
            Vote.user_id == user_id,
            Vote.location_id == location_id
        ).first()

        if action == 'increment':
            if existing_vote:
                # Update existing vote
                existing_vote.count = 1 if vote_type == 'up' else -1
            else:
                # Create new vote
                new_vote = Vote(
                    user_id=user_id,
                    location_id=location_id,
                    count=1 if vote_type == 'up' else -1
                )
                db.session.add(new_vote)

        elif action == 'decrement':
            if existing_vote:
                # Remove the vote
                db.session.delete(existing_vote)

        db.session.commit()

        # Return updated totals with percentages
        upvotes = Vote.query.filter(
            Vote.location_id == location_id,
            Vote.count > 0
        ).count()

        downvotes = Vote.query.filter(
            Vote.location_id == location_id,
            Vote.count < 0
        ).count()

        total = upvotes + downvotes

        # Calculate percentages
        if total > 0:
            upvote_percentage = round((upvotes / total) * 100, 1)
            downvote_percentage = round((downvotes / total) * 100, 1)
        else:
            upvote_percentage = 0
            downvote_percentage = 0

        # Determine overall rating
        if total == 0:
            rating = 'No votes yet'
            rating_class = 'neutral'
        elif upvote_percentage >= 80:
            rating = 'Excellent'
            rating_class = 'excellent'
        elif upvote_percentage >= 60:
            rating = 'Good'
            rating_class = 'good'
        elif upvote_percentage >= 40:
            rating = 'Mixed'
            rating_class = 'mixed'
        else:
            rating = 'Poor'
            rating_class = 'poor'

        return jsonify({
            'success': True,
            'upvotes': upvotes,
            'downvotes': downvotes,
            'total': total,
            'upvote_percentage': upvote_percentage,
            'downvote_percentage': downvote_percentage,
            'rating': rating,
            'rating_class': rating_class
        })

    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500


@vote_routes.route('/location/<int:location_id>', methods=['GET'])
def get_location_votes(location_id):
    """Get vote totals for a specific location"""
    try:
        # Count positive votes (count > 0) and negative votes (count < 0)
        upvotes = Vote.query.filter(
            Vote.location_id == location_id,
            Vote.count > 0
        ).count()

        downvotes = Vote.query.filter(
            Vote.location_id == location_id,
            Vote.count < 0
        ).count()

        total = upvotes + downvotes

        # Calculate percentages
        if total > 0:
            upvote_percentage = round((upvotes / total) * 100, 1)
            downvote_percentage = round((downvotes / total) * 100, 1)
        else:
            upvote_percentage = 0
            downvote_percentage = 0

        # Determine overall rating
        if total == 0:
            rating = 'No votes yet'
            rating_class = 'neutral'
        elif upvote_percentage >= 80:
            rating = 'Excellent'
            rating_class = 'excellent'
        elif upvote_percentage >= 60:
            rating = 'Good'
            rating_class = 'good'
        elif upvote_percentage >= 40:
            rating = 'Mixed'
            rating_class = 'mixed'
        else:
            rating = 'Poor'
            rating_class = 'poor'

        return jsonify({
            'location_id': location_id,
            'upvotes': upvotes,
            'downvotes': downvotes,
            'total': total,
            'upvote_percentage': upvote_percentage,
            'downvote_percentage': downvote_percentage,
            'rating': rating,
            'rating_class': rating_class
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@vote_routes.route('/user/<int:user_id>/location/<int:location_id>', methods=['GET'])
def get_user_vote_for_location(user_id, location_id):
    """Get a specific user's vote for a specific location"""
    try:
        vote = Vote.query.filter(
            Vote.user_id == user_id,
            Vote.location_id == location_id
        ).first()

        if vote:
            return jsonify({
                'vote': vote.to_dict(),
                'vote_type': 'up' if vote.count > 0 else 'down' if vote.count < 0 else None
            })
        else:
            return jsonify({'vote': None, 'vote_type': None})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

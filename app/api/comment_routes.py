from flask import Blueprint, request, jsonify
from flask_login import login_required
from app.models import Comment, Image, db
from flask_login import current_user, login_required


comment_routes = Blueprint('comments', __name__)




@comment_routes.route('/')
@login_required
def get_comments():
    # comments = Comment.query.filter(Comment.image_id == id).all()
    comments = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in comments]}


@comment_routes.route('/<int:id>')
@login_required
def get_one_comment(id):
    comment = Comment.query.get(id)
    if not comment:
        return jsonify('comment doesn"t exist=> message from BACKEND COMMENTROUTE')
    return comment.to_dict()


#post is working
@comment_routes.route('/new', methods=['POST'])
@login_required
def add_comment():
    new_comment = Comment(
        comment=request.form['comment'],
        image_id=request.form['image_id'],
        user_id=current_user.id
    )
    print('****comment Route****')
    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()


@comment_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return {'id': id}


@comment_routes.route('/update/<image_id>', methods=['PUT'])
@login_required
def update_comment(id):
    update_comment = Comment.query.get(id)
    print('from update route', update_comment.to_dict())
    update_comment.comment = request.form['comment']
    db.session.add(update_comment)
    db.session.commit()
    return update_comment.to_dict()

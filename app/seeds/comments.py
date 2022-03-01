from app.models import db, Comment


def seed_comments():
    comment = Comment(
        comment='Wow this place has by far the best cheesesteak',
        user_id=1,
        image_id=1,
    )
    comment2 = Comment(
        comment='This place rocks',
        user_id=2,
        image_id=2,
    )
    comment3 = Comment(
        comment='This is a test pic',
        user_id=3,
        image_id=3
    )

    db.session.add(comment)
    db.session.add(comment2)
    db.session.add(comment3)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()

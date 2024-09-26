from app.models import db, Vote


def seed_votes():
    vote = Vote(
        user_id=1, count=1, location_id=1)
    vote2 = Vote(
        user_id=2, count=1, location_id=2)
    vote3 = Vote(
        user_id=3, count=1, location_id=2)

    db.session.add(vote)
    db.session.add(vote2)
    db.session.add(vote3)
    db.session.commit()


def undo_votes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

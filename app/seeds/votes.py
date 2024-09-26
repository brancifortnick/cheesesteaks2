from app.models import db, Vote


def seed_votes():
    count = Vote(
        user_id=1, count=1, location_id=1)
    db.session.commit()

    db.session.add(count)
def undo_votes():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

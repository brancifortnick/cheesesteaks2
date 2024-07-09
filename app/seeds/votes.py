from app.models import Vote,db
def seed_votes():
    vote = Vote(
        user_id=1, location_id=1, vote=1, downvote=0)
    vote2 = Vote(
        user_id=2, location_id=2, vote=0, downvote=1)
    vote3 = Vote(
        user_id=3, location_id=3, vote=0, downvote=1)
    db.session.add(vote)
    db.session.add(vote2)
    db.session.add(vote3)
    db.session.commit()
def undo_votes():
    db.session.execute('TRUNCATE votes RESTART IDENTITY CASCADE;')
    db.session.commit()

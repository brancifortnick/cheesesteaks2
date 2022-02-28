from app.models import db, Location


def seed_locations():
    location = Location(
        user_id=1,
        location_name='Pats',
        profile_img='https://mycheesesteaks.s3.amazonaws.com/pats.jpg',
        biography='Music is my life, and I spent my time focusing on music production and music theory to gain practical knowledge in order to follow my true passion - MUSIC!',
    )
    location2 = Location(
        user_id=2,
        location_name='WizWit',
        profile_img='https://mycheesesteaks.s3.amazonaws.com/wizwit.jpg',
        biography='I currently work in "the Big Apple" as a music producer'
    )
    location3 = Location(
        user_id=3,
        location_name='Steak2',
        profile_img='https://mycheesesteaks.s3.amazonaws.com/steak2.jpg',
        biography="I too, also produce music, and work alongside big name artists'",
    )
    db.session.add(location)
    db.session.add(location2)
    db.session.add(location3)
    db.session.commit()


def undo_locations():
    db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE;')
    db.session.commit()

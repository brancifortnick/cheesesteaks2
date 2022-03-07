from app.models import db, Location


def seed_locations():
    location = Location(
        user_id=1,
        location_name='Pats',
        profile_img='https://mycheesesteaks.s3.amazonaws.com/pats.jpg',
        biography='Pats steaks is famous in Philly and competes with its arch nemesis Geno"s!',
    )
    location2 = Location(
        user_id=2,
        location_name='WizWit',
        profile_img='https://mycheesesteaks.s3.amazonaws.com/wizwit.jpg',
        biography='Grab a wizwit from this location'
    )
    location3 = Location(
        user_id=3,
        location_name='Steak2',
        profile_img='https://mycheesesteaks.s3.amazonaws.com/steak2.jpg',
        biography="Steak3 bio",
    )
    db.session.add(location)
    db.session.add(location2)
    db.session.add(location3)
    db.session.commit()


def undo_locations():
    db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE;')
    db.session.commit()

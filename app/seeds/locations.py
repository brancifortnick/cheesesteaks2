from app.models import db, Location


def seed_locations():
    location = Location(
        user_id=1,
        location_name='Pats',
        profile_img='https://mycheesesteaks.s3.us-east-1.amazonaws.com/0c5cd5cd4a844eeb82aa0475dffa2a54.jpg',
        biography='Pats steaks is famous in Philly and competes with its arch nemesis Geno"s!',
        address='1237 E Passyunk Ave',
        city='Philadelphia',
        state='PA',
        zipcode='19147'

    )
    location2 = Location(
        user_id=2,
        location_name='Ishkibbibles',
        profile_img='https://mycheesesteaks.s3.us-east-1.amazonaws.com/034bcd5951d2430a8ade2c26a63cc916.jpg',
        biography='Top 10 in philly for sure',
        address='337 S St',
        city='Philadelphia',
        state='PA',
        zipcode='19147'
    )

    location3 = Location(
        user_id=3,
        location_name='Angelo"s"',
        profile_img='https://mycheesesteaks.s3.us-east-1.amazonaws.com/0396b62d935c409cb4ae024fef3e76d7.jpg',
        biography="top 3 in Philadelphia",
        address='736 S 9th Street',
        city='Philadelphia',
        state='PA',
        zipcode='19147'
    )
    db.session.add(location)
    db.session.add(location2)
    db.session.add(location3)
    db.session.commit()
    return [location, location2, location3]


def undo_locations():
    db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE;')
    db.session.commit()

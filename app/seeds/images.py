from app.models import db, Image
def seed_images(locations):
    image = Image(
        image='https://mycheesesteaks.s3.amazonaws.com/pats.jpg',
        title='test',
        user_id=1,
        location_id=locations[0].id,
    )
    image2 = Image(
        image='https://mycheesesteaks.s3.us-east-1.amazonaws.com/00ddbac09f5b40d39e4fe08b03bc83fa.jpg',
        title='Barclay Prime Steakhouse Steak',
        user_id=2,
        location_id=locations[1].id
    )
    image3 = Image(
        image='https://mycheesesteaks.s3.us-east-1.amazonaws.com/126d62ae52d845ab9ccb10767b1a5bf2.jpg',
        title='Pats steaks ',
        user_id=3,
        location_id=locations[2].id,
    )

    db.session.add(image)
    db.session.add(image2)
    db.session.add(image3)

    db.session.commit()
def undo_images():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

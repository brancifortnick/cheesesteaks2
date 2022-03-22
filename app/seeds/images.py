from app.models import db, Image


def seed_images():
    image = Image(
        image='https://mycheesesteaks.s3.amazonaws.com/pats.jpg',
        title='test',
        user_id=1,

    )

    image2 = Image(
        image='https://mycheesesteaks.s3.amazonaws.com/wizwit.jpg',
        title='test2',
        user_id=2,

    )

    image3 = Image(
        image='https://mycheesesteaks.s3.amazonaws.com/steak2.jpg',
        title='test3',
        user_id=3,

    )

    db.session.add(image)
    db.session.add(image2)
    db.session.add(image3)
    db.session.commit()


def undo_images():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

"""empty message

Revision ID: d65b57defda4
Revises: 0ad6c6339dcf
Create Date: 2022-03-22 11:57:16.470677

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd65b57defda4'
down_revision = '0ad6c6339dcf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('comments_image_id_fkey', 'comments', type_='foreignkey')
    op.drop_column('comments', 'image_id')
    op.add_column('images', sa.Column('comment_id', sa.Integer(), nullable=True))
    op.alter_column('images', 'title',
               existing_type=sa.VARCHAR(length=50),
               nullable=False)
    op.create_foreign_key(None, 'images', 'comments', ['comment_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'images', type_='foreignkey')
    op.alter_column('images', 'title',
               existing_type=sa.VARCHAR(length=50),
               nullable=True)
    op.drop_column('images', 'comment_id')
    op.add_column('comments', sa.Column('image_id', sa.INTEGER(), autoincrement=False, nullable=False))
    op.create_foreign_key('comments_image_id_fkey', 'comments', 'images', ['image_id'], ['id'])
    # ### end Alembic commands ###
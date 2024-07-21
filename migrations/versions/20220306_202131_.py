"""empty message
Revision ID: 0ad6c6339dcf
Revises: 97714a1d178b
Create Date: 2022-03-06 20:21:31.404000
"""
from alembic import op
import sqlalchemy as sa
# revision identifiers, used by Alembic.
revision = '0ad6c6339dcf'
down_revision = '97714a1d178b'
branch_labels = None
depends_on = None
def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('votes', sa.Column('location_id', sa.Integer(), nullable=True))
    op.drop_constraint('votes_image_id_fkey', 'votes', type_='foreignkey')
    op.create_foreign_key(None, 'votes', 'locations', ['location_id'], ['id'])
    op.drop_column('votes', 'image_id')
    # ### end Alembic commands ###
def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('votes', sa.Column('image_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'votes', type_='foreignkey')
    op.create_foreign_key('votes_image_id_fkey', 'votes', 'images', ['image_id'], ['id'])
    op.drop_column('votes', 'location_id')
    # ### end Alembic commands ###

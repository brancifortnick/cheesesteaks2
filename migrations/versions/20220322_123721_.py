"""empty message
Revision ID: d181f2c00dd9
Revises: ef022bde02d3
Create Date: 2022-03-22 12:37:21.848049
"""
from alembic import op
import sqlalchemy as sa
# revision identifiers, used by Alembic.
revision = 'd181f2c00dd9'
down_revision = 'ef022bde02d3'
branch_labels = None
depends_on = None
def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('comments', sa.Column('image_id', sa.Integer(), nullable=True))
    op.create_foreign_key(None, 'comments', 'images', ['image_id'], ['id'])
    op.drop_column('images', 'comment_id')
    # ### end Alembic commands ###
def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('images', sa.Column('comment_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'comments', type_='foreignkey')
    op.drop_column('comments', 'image_id')
    # ### end Alembic commands ###

"""empty message
Revision ID: 52dbc51c6e4f
Revises: 9050842a60e9
Create Date: 2022-02-28 17:25:26.855576
"""
from alembic import op
import sqlalchemy as sa
# revision identifiers, used by Alembic.
revision = '52dbc51c6e4f'
down_revision = '9050842a60e9'
branch_labels = None
depends_on = None
def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('created_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False))
    op.add_column('users', sa.Column('updated_at', sa.DateTime(timezone=True), server_default=sa.text('now()'), nullable=False))
    # ### end Alembic commands ###
def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'updated_at')
    op.drop_column('users', 'created_at')
    # ### end Alembic commands ###

"""empty message

Revision ID: 25abaad857c8
Revises: 
Create Date: 2023-09-01 21:56:33.054254

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '25abaad857c8'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('user_name', sa.String(length=120), nullable=False),
    sa.Column('cellphone', sa.BigInteger(), nullable=False),
    sa.Column('country', sa.String(length=120), nullable=False),
    sa.Column('city', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=300), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('cellphone'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('user_name')
    )
    op.create_table('product',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('product_state', sa.String(length=120), nullable=False),
    sa.Column('category', sa.String(length=50), nullable=False),
    sa.Column('author', sa.String(length=120), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=False),
    sa.Column('image', sa.String(length=1000), nullable=False),
    sa.Column('interested_product_one', sa.String(length=120), nullable=False),
    sa.Column('interested_product_two', sa.String(length=120), nullable=True),
    sa.Column('interested_product_three', sa.String(length=120), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('product')
    op.drop_table('user')
    # ### end Alembic commands ###

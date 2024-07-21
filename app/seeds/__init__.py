from flask.cli import AppGroup
from .users import seed_users, undo_users
from .locations import seed_locations, undo_locations
from .comments import seed_comments, undo_comments
from .images import seed_images, undo_images
from .votes import seed_votes, undo_votes
# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')
# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    locations = seed_locations()
    seed_images(locations)
    seed_comments()
    seed_votes()
    # Add other seed functions here
# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_locations()
    undo_images()
    undo_comments()
    undo_votes()
    # Add other undo functions here

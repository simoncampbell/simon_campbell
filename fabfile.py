from os.path import join
from pepa.conf.environments import env

# This is specific to Django projects
env.platform = 'php' # should be django or php
env.project = ''

# You can specify environments here
def staging():
    env.name = 'staging'
    env.url = 'simoncampbell-craft.erskinestage.com'
    env.hosts = ['rackdev.erskinedev.com:22',]
    env.path = join(env.web_root, env.url)
    env.database = None
    env.require_password = True

def production():
    env.name = 'production'
    env.url = 'craft.simoncampbell.com'
    env.hosts = ['rack.erskinedev.com:22',]
    env.path = join(env.web_root, env.url)
    env.database = None
    env.require_password = True

from pepa import *

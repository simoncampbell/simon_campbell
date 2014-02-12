# Simon Campbell
The redesign of [simoncampbell.com](http://simoncampbell).

## Installation

### Setting up Craft locally

1. Make a new database
2. Copy craft/config/db.sample.php and rename the new file to db.php 
3. Update db.php with local settings.
4. Set the permissions of craft/storage/, craft/config/ and craft/app to 777
5. Point your browser to: website_name/index.php?p=admin
6. Get #crafting.


### Compass
If you don’t have compass installed then run the following commands:

    $gem update --system
    $gem install compass

Then navigate to /public and run:

    $compass watch

Settings for the compass configuration are placed within the config.rb.

#### Compass plugins
If [Breakpoint](http://breakpoint-sass.com/) isn’t installed then run:

    $gem install breakpoint


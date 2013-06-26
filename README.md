# Simon Campbell
The redesign of [simoncampbell.com](http://simoncampbell).

## Installation

### Setting up Craft locally

1. Download [Craft](http://buildwithcraft.com/)
2. Make a new DB
3. Rename craft/config/db.sample.php to db.php and edit to local settings
4. Delete web.config in craft/config/
5. Set the permissions of craft/storage/, craft/config/ and craft/app to 777
6. Point your browser to: website_name/index.php?p=admin
7. Install Craft
8. Get #crafting


### Compass
If you don’t have compass installed then run the following commands:
    
    $gem update --system
    $gem install compass

Then navigate to the top level directory of the project and run:
      
    $compass watch
  
Settings for the compass configuration are placed within the config.rb.

#### Compass plugins
If [Breakpoint](http://breakpoint-sass.com/) isn’t installed then run:

    $gem install breakpoint

And finally make sure to install the [Sass toolkit](https://github.com/Team-Sass/toolkit):

    $gem install toolkit

# Meet-Up Event Planner

Senior web-developer udacity project 1

App that creates and saves meet up events into firebase database.
To improve user's experience It uses google geolocate API for easy address autocomplete and bootstrap datetime picker for date and time selection.

Visit [online](https://webenhanced.co.uk/event-planner/)

### Build & development

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

*  Run following: `npm install` and `bower install`

*  This app requires **Compass** to be installed on your computer

  * Install Ruby package manager ( [Windows](http://rubyinstaller.org/) / [Linux](https://www.ruby-lang.org/en/documentation/installation/) )

  * Run `gem install compass`

*  To build compressed version of app for distribution run `grunt` from command line. _( Grunt builds app in /dist )_

*  Run `grunt serve` to develop or preview

*****

### Linux step by step installation

_Tested on Ubuntu 16 LTS_

Applications requires following:
 * Node.js
 * Grunt, Grunt-cli
 * Ruby
 * Compass
 * Git



#### To install run following commands in Terminal


 1. curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

 2. sudo apt-get install -y nodejs

 3. sudo npm intall npm -g

 4. sudo npm install grunt grunt-cli bower -g

 5. sudo apt-get install ruby-full

 6. sudo apt-get update

 7. sudo gem install compass

 8. sudo apt-get install git

 9. git clone https://github.com/pe1te3son/meet-up-event-planner.git

 _Navigate into the project directory_

 10. npm install && bower install

 11. grunt serve


 ****



### Resources

https://docs.angularjs.org/api

http://stackoverflow.com/

### Credits
[Google geolocate API](https://developers.google.com/maps/documentation/geolocation/intro)

[Bootstrap datetime picker](https://github.com/smalot/bootstrap-datetimepicker)

[Moment.js](http://momentjs.com/)

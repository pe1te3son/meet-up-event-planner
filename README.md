# Meet-Up Event Planner

### _Notes for Udacity reviewer_

* There were some issues with loading main.css on the previous submission. I wasn't able to find out what that was as it is working for me on both Pc and [online](https://webenhanced.co.uk/event-planner/). If you have the same issue with my app, please try running it in incognito mode or another browser.
* There was also a problem with google API key I solved it by unlocking localhost:9000, so it should be fine now if you run `grunt serve` to preview

****

Senior web-developer udacity project 1

App that creates and saves meet up events into firebase database.
To improve user's experience It uses google geolocate API for easy address autocomplete and bootstrap datetime picker for date and time selection.

Visit [online](http://webenhanced.co.uk/event-planner/)

### Build & development

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

*  Run `npm install` and `bower install`

*  To build compressed version of app for distribution run `grunt` from command line. _( Grunt builds app in /dist )_

*  Run `grunt serve` when developing or previewing

### Resources

https://docs.angularjs.org/api

http://stackoverflow.com/

### Credits
[Google geolocate API](https://developers.google.com/maps/documentation/geolocation/intro)

[Bootstrap datetime picker](https://github.com/smalot/bootstrap-datetimepicker)

[Moment.js](http://momentjs.com/)

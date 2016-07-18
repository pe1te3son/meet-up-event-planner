'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AddeventformCtrl
 * @description
 * # AddeventformCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('AddeventformCtrl', ['$firebaseArray', 'FirebaseService', '$state', '$http', function ($firebaseArray, FirebaseService, $state, $http) {

    var ref = new Firebase(FirebaseService.link + '/events');
    var vm = this;
    var date = moment().format('YYYY-MM-DD');
    var time = moment().format('hh:mm');

    // Formated date for html input field with attribute type=datetime-local
    this.setDate = date + 'T' + time;
    this.collection = $firebaseArray(ref);

    // Updated end event time and date base on start date and time selected
    this.updateEndDate = function(){
      vm.selectedEndDate = vm.selectedStartDate;
    };

    // Returns all default values for add event form
    this.eventDefault = function(){
      vm.selectedStartDate = new Date(vm.setDate);
      vm.updateEndDate();

      // All values commented out are optional
      return {
        name: '',
        category: '',
        startDate: date,
        startTime: time,
        endDate: '',
        endTime: '',
        host: '',
        guests: [],
        eventLocation: '',
        //additionalInfo: ''
      };
    };

    // Set defaults
    this.event = this.eventDefault();

    this.addEvent = function(){

      // Format time and date before saving to database
      vm.event.startDate = moment(vm.selectedStartDate).format('YYYY-MM-DD');
      vm.event.startTime = moment(vm.selectedStartDate).format('hh:mm');
      vm.event.endDate = moment(vm.selectedEndDate).format('YYYY-MM-DD');
      vm.event.endTime = moment(vm.selectedEndDate).format('hh:mm');

      // Save to database
      vm.collection.$add(vm.event);
    };

    this.submit = function(isValid){
      if(isValid){
        vm.addEvent();

        // Reload add form to clear inputs
        $state.reload();
      }
    };

    this.addGuest = function(e){
      var duplicate = false;

      for(var i = 0; i<vm.event.guests.length && !duplicate; i++){
        if(vm.guest === vm.event.guests[i]){
          duplicate = true;
        }
      }

      if(e.which === 13 || e === 'click'){

        if(!duplicate){
          vm.event.guests.push(vm.guest);
          vm.guest = '';
        }

      }
    };

    this.removeGuest = function(index){
      vm.event.guests.splice(index, 1);
    };

    this.componentForm = {
      street_number: 'short_name',
      route: 'long_name',
      locality: 'long_name',
      administrative_area_level_1: 'short_name',
      country: 'long_name',
      postal_code: 'short_name'
    };

    this.geolocate = function() {
      // Bias the autocomplete object to the user's geographical location,
      // as supplied by the browser's 'navigator.geolocation' object.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          /* global google */
          var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
          });
          //autocomplete.setBounds(circle.getBounds());
          console.log(circle);
        });
      }
    };




  }//controller

]);

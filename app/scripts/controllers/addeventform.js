'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AddeventformCtrl
 * @description
 * # AddeventformCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('AddeventformCtrl', ['$firebaseArray', 'FirebaseService', '$state', function ($firebaseArray, FirebaseService, $state) {

    var ref = new Firebase(FirebaseService.link + '/events');
    var vm = this;

    // Store events
    this.collection = $firebaseArray(ref);

    // Returns all default values for add event form
    this.eventDefault = function(){
      // All values commented out are optional
      return {
        name: '',
        category: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        host: '',
        guests: [],
        eventLocation: {},
        //additionalInfo: ''
      };
    };

    // Set defaults
    this.event = this.eventDefault();

    /*
      Temporaly store location input for purpose of validation with angular.
      Input is processed with fillInAddress function and saved in event object
      as an object with a key = address type.
    */
    this.tempLocation = '';

    this.addEvent = function(){

      // Format time and date before saving to database
      vm.event.startDate = moment(vm.selectedStartDate).format('YYYY-MM-DD');
      vm.event.startTime = moment(vm.selectedStartDate).format('hh:mm');
      vm.event.endDate = moment(vm.selectedEndDate).format('YYYY-MM-DD');
      vm.event.endTime = moment(vm.selectedEndDate).format('hh:mm');

      // Save to database
      vm.collection.$add(vm.event);
    };

    // Formated date for html input field with attribute type=datetime-local
    this.setDatetime = function(){
      var date = moment().format('YYYY-MM-DD');
      var time = moment().format('hh:mm');
      return date + 'T' + time;
    };

    this.fillStartDateInput = function(){
      vm.selectedStartDate = new Date(vm.setDatetime());
    };

    this.fillEndDateInput = function(){
      vm.updateEndDate();
    };

    // Updated end event time and date base on start date and time selected
    this.updateEndDate = function(){
      vm.selectedEndDate = vm.selectedStartDate;
    };

    this.guestsRequired = false;
    this.guestDuplicate = false;
    this.isNotValid = false;

    this.submit = function(isValid){

      if(vm.event.guests.length && isValid){
        vm.addEvent();
        // Reload add form to clear inputs
        $state.reload();

      } else {
        vm.isNotValid = true;
      }

      if(!vm.event.guests.length) {
        vm.guestsRequired = true;
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
          vm.guestsRequired = false;
          vm.guestDuplicate = false;
          vm.event.guests.push(vm.guest);
          vm.guest = '';
        } else if(duplicate){
          vm.guestDuplicate = true;
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
          vm.autocomplete.setBounds(circle.getBounds());
        });
      }
    };

    this.fillInAddress = function() {
      // Get the place details from the autocomplete object.
      var place = vm.autocomplete.getPlace();
      vm.event.eventLocation = {};
      // Get each component of the address from the place details
      // and fill the corresponding field on the form.
      for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (vm.componentForm[addressType]) {
          var val = place.address_components[i][vm.componentForm[addressType]];

          // Save each address type
          vm.event.eventLocation[addressType] = val;
        }
      }
      console.log(vm.event.eventLocation);
    };

    this.initAutocomplete = function() {

      // Create the autocomplete object, restricting the search to geographical
      // location types.
      vm.autocomplete = new google.maps.places.Autocomplete(
          /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
          {types: ['geocode']});

      vm.geolocate();
      // When the user selects an address from the dropdown, populate the address
      // fields in the form.
      vm.autocomplete.addListener('place_changed', vm.fillInAddress);
    };

  }//controller

]);

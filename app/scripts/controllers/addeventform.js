'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AddeventformCtrl
 * @description
 * # AddeventformCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('AddeventformCtrl', ['$firebaseArray', 'FireBase', function ($firebaseArray, FireBase) {

    var ref = new Firebase(FireBase.link + '/events');
    var vm = this;
    var date = moment().format('YYYY-MM-DD');
    var time = moment().format('hh:mm');
    this.setDate = date + 'T' + time;
    this.collection = $firebaseArray(ref);
    this.eventDefault = function(){
      vm.selectedStartDate = new Date(vm.setDate);
      vm.selectedEndDate = vm.selectedStartDate;
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
        additionalInfo: ''
      };
    };

    this.event = this.eventDefault();

    this.addEvent = function(){
      vm.event.startDate = moment(vm.selectedStartDate).format('YYYY-MM-DD');
      vm.event.startTime = moment(vm.selectedStartDate).format('hh:mm');
      vm.event.endDate = moment(vm.selectedEndDate).format('YYYY-MM-DD');
      vm.event.endTime = moment(vm.selectedEndDate).format('hh:mm');
      vm.collection.$add(vm.event);
      vm.event = vm.eventDefault();
    };

    this.submit = function(isValid){
      if(isValid){
        vm.addEvent();
      }
    };

    this.updateEndDate = function(){
      vm.selectedEndDate = vm.selectedStartDate;
    };



    this.addGuest = function(e){
      var duplicate = false;
      console.log(e);
      for(var i = 0; i<vm.event.guests.length && !duplicate; i++){
        if(vm.guest === vm.event.guests[i]){
          duplicate = true;
          console.log(duplicate);
        }
      }

      if(e.which === 13 || e === 'click'){

        if(!duplicate){
          vm.event.guests.push(vm.guest);
          console.log(vm.guest.length);
          vm.guest = ' ';

        }

      }
    };

    this.removeGuest = function(index){
      console.log(index);
      vm.event.guests.splice(index, 1);
    };

  }

]);

'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AddeventformCtrl
 * @description
 * # AddeventformCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('AddeventformCtrl', ['$firebaseArray', 'firebaseHelpers', function ($firebaseArray, firebaseHelpers) {

    var ref = new Firebase(firebaseHelpers.firebaseUrl() + '/events');
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
        guests: ['first', 'second'],
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

  }

]);

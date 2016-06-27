'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:addEventFormCtrl
 * @description
 * # addEventFormCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('addEventFormCtrl', ['$firebaseArray', 'firebaseHelper', function ($firebaseArray, firebaseHelper) {

    var ref = new Firebase(firebaseHelper.link() + '/events');
    var vm = this;
    var date = moment().format('YYYY-MM-DD');
    var time = moment().format('hh:mm');

    this.setDate = date + 'T' + time;
    this.collection = $firebaseArray(ref);

    this.eventDefault = function(){
      this.selectedStartDate = new Date(this.setDate);
      this.selectedEndDate = this.selectedStartDate;
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

    this.submit = function(){
      vm.addEvent();
    };

    this.updateEndDate = function(){
      this.selectedEndDate = this.selectedStartDate;
    };

  }

]);

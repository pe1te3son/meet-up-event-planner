'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:addEventFormCtrl
 * @description
 * # addEventFormCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('addEventFormCtrl', function ($scope, $firebaseArray) {
    var ref = new Firebase('https://event-planner-janak.firebaseio.com/events');

    this.firebaseData = $firebaseArray(ref);
    this.event = {
      name: '',
      category: '',
      host: '',
      additionalInfo: ''
    };

    this.addEvent = function(){
      this.firebaseData.$add(this.event);
      this.event = {};
    };




    this.submit = function(){
      this.addEvent();
    };
  });

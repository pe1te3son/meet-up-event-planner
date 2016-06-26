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
  }

]);

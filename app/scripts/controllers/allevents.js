'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AlleventsCtrl
 * @description
 * # AlleventsCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('AlleventsCtrl', ['$firebaseArray', 'firebaseHelpers', function ($firebaseArray, firebaseHelpers) {

    var ref = new Firebase( firebaseHelpers.firebaseUrl() + '/events');

    this.allEvents = $firebaseArray(ref);

  }// function ends

]);

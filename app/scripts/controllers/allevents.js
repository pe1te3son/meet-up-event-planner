'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AlleventsCtrl
 * @description
 * # AlleventsCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('AlleventsCtrl', ['$firebaseArray', 'FirebaseService', function ($firebaseArray, FirebaseService) {

    this.allEvents = FirebaseService.array('/events');

  }// function ends

]);

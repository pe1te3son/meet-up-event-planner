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

    var ref = new Firebase( FirebaseService.link + '/events');

    this.allEvents = $firebaseArray(ref);

  }// function ends

]);

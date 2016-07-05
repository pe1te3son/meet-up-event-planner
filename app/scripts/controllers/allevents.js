'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AlleventsCtrl
 * @description
 * # AlleventsCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('AlleventsCtrl', ['$firebaseArray', 'FireBase', function ($firebaseArray, FireBase) {

    var ref = new Firebase( FireBase.link + '/events');

    this.allEvents = $firebaseArray(ref);

  }// function ends

]);

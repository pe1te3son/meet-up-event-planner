'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AlleventsCtrl
 * @description
 * # AlleventsCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('AlleventsCtrl', ['$firebaseArray', 'firebaseHelper', function ($firebaseArray, firebaseHelper) {

    var ref = new Firebase( firebaseHelper.link() + '/events');

    this.allEvents = $firebaseArray(ref);

  }// function ends

]);

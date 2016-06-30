'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl', ['$firebaseAuth', 'firebaseHelpers', function ($firebaseAuth, firebaseHelpers) {
    var ref = new Firebase(firebaseHelpers.firebaseUrl());
    var auth = $firebaseAuth(ref);
    console.log(auth);

  }
]);

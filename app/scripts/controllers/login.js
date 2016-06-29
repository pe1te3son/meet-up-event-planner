'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl', ['$firebaseAuth', 'firebaseHelper', function ($firebaseAuth, firebaseHelper) {
    var ref = new Firebase(firebaseHelper.link());
    var auth = $firebaseAuth(ref);
    console.log(auth);
    console.log(this.authObj);
  }
]);

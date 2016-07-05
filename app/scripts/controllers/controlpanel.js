'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:ControlpanelCtrl
 * @description
 * # ControlpanelCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('ControlpanelCtrl', [ '$firebaseAuth', 'firebaseHelpers', '$state',  function ($firebaseAuth, firebaseHelpers, $state) {
    var ref = new Firebase(firebaseHelpers.firebaseUrl());
    this.authObj = $firebaseAuth(ref);
    console.log($firebaseAuth(ref));



    console.log(this.authObj.$getAuth());

    this.logOut = function(){
      this.authObj.$unauth();
      $state.go('login');
    };
  }
]);

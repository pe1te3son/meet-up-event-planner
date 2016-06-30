'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:ControlpanelCtrl
 * @description
 * # ControlpanelCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('ControlpanelCtrl', [ '$firebaseAuth', 'firebaseHelpers', '$rootScope', function ($firebaseAuth, firebaseHelpers, $rootScope) {
    var ref1 = new Firebase(firebaseHelpers.firebaseUrl());
    this.authObj = $firebaseAuth(ref1);
    console.log($firebaseAuth(ref1));
    var vm = this;
    // this.authObj.$authWithPassword({
    //   email: 'mate@mate.com',
    //   password: 'peterjan'
    // }).then(function(){
    //   console.log(vm.authObj.$getAuth());
    // });

    vm.authObj.$unauth();
    console.log(vm.authObj.$getAuth());
    $rootScope.isUser = false;

  }
]);

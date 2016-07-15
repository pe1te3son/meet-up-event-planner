'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:ControlpanelCtrl
 * @description
 * # ControlpanelCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('ControlpanelCtrl', [ 'FirebaseService', '$state',  function (FirebaseService, $state) {
    var vm = this;
    this.auth = FirebaseService.auth();

    console.log(this.auth.$getAuth());

    this.logOut = function(){
      vm.auth.$unauth();
      $state.go('login');
    };
  }
]);

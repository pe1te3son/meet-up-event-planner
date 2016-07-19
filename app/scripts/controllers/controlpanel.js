'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:ControlpanelCtrl
 * @description
 * # ControlpanelCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('ControlpanelCtrl', [ 'FirebaseService', '$state', 'currentAuth', function (FirebaseService, $state, currentAuth) {
    var vm = this;
    if(!currentAuth){
      $state.go('login');
    }
    this.auth = FirebaseService.auth();

    console.log(this.auth.$getAuth());
    this.logOut = function(){
      vm.auth.$unauth();
      $state.go('login');
    };
  }
]);

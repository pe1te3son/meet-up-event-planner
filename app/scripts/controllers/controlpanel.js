'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:ControlpanelCtrl
 * @description
 * # ControlpanelCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('ControlpanelCtrl', [ 'FireBase', '$state',  function (FireBase, $state) {
    var vm = this;
    this.auth = FireBase.auth();

    console.log(this.auth.$getAuth());

    this.logOut = function(){
      vm.auth.$unauth();
      $state.go('login');
    };
  }
]);

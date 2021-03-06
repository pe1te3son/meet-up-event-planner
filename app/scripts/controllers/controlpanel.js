/**
 * @ngdoc function
 * @name eventPlannerApp.controller:ControlpanelCtrl
 * @description
 * # ControlpanelCtrl
 * Controller of the eventPlannerApp
 */

angular.module('eventPlannerApp')
  .controller('ControlpanelCtrl', [ 'FirebaseService', '$state', 'currentAuth', function (FirebaseService, $state, currentAuth) {
    'use strict';
    var vm = this;
    if(!currentAuth){
      $state.go('login');
    }

    var counter = FirebaseService.array('/events');
    this.eventsCounter = null;

    counter.$watch(function(){
      vm.eventsCounter = counter.length;
    });

    this.auth = FirebaseService.auth();

    this.logOut = function(){
      vm.auth.$unauth();
      $state.go('login');
    };
  }
]);

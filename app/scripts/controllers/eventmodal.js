'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:EventmodalCtrl
 * @description
 * # EventmodalCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('EventmodalCtrl', [ '$state',  function ($state) {
    this.close = function(){
      $state.go('allEvents');
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:EventmodalCtrl
 * @description
 * # EventmodalCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('EventmodalCtrl', [ 'eventdata', '$state',  function (eventdata, $state) {
    this.close = function(){
      $state.go('allEvents');
    };

    console.log(eventdata);

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

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

    $('#myModal').modal('show').on('hide.bs.modal', function(){
      setTimeout(function () {
        $state.go('allEvents');
      }, 200);
    });
    console.log(eventdata);


  }]);

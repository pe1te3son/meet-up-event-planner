/**
 * @ngdoc function
 * @name eventPlannerApp.controller:EventmodalCtrl
 * @description
 * # EventmodalCtrl
 * Controller of the eventPlannerApp
 * Shows and hides modal window and deletes selected event.
 * When modal close it redirects to allEvents
 */
angular.module('eventPlannerApp')
  .controller('EventmodalCtrl', [ 'FirebaseService', 'eventdata', '$state',  function (FirebaseService, eventdata, $state) {
    'use strict';

    var vm = this;
    this.eventdata = eventdata;

    $('#event-modal').modal('show').on('hide.bs.modal', function(){
      // Waits for animation to end and then redirects
      setTimeout(function () {
        $state.go('allEvents');
      }, 200);
    });

    this.formatDate = function(date){
      return moment(date, 'YYYY-MM-DD').format('Do MMM YYYY');
    };

    // Removes event from database
    this.remove = function(){
      var data = FirebaseService.array('/events');
      data.$loaded()
      .then(function(resp){
        resp.$remove(resp.$getRecord(vm.eventdata.$id));
        vm.closeModal();
      });
    };

    this.closeModal = function(){
      $('#event-modal').modal('hide');
    };




  }]);

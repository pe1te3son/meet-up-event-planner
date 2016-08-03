/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AlleventsCtrl
 * @description
 * # AlleventsCtrl
 * Controller of the eventPlannerApp
 * Displays all events saved in database
 */
angular.module('eventPlannerApp')
  .controller('AlleventsCtrl', ['FirebaseService', 'getEvents', '$state', function (FirebaseService, getEvents, $state) {
    'use strict';

    console.log($state.get());
    var vm = this;
    this.allEvents = getEvents;
    this.remove = function(item){
      vm.allEvents.$remove(item);
    };

    // On select make sure that there is only one event open
   this.select= function(item) {
    if(this.selected === item){
      this.selected = null;
    }else{
      this.selected = item;
    }

   };

   this.isActive = function(item) {
    return this.selected === item;
   };

   this.formatDate = function(date){
     return moment(date, 'YYYY-MM-DD').format('Do MMM YYYY');
   };

   this.showModal = function(e){
     $state.go('eventModal', {id: e.$id});
   };


  }// function ends

]);

'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:AlleventsCtrl
 * @description
 * # AlleventsCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('AlleventsCtrl', ['FirebaseService', function (FirebaseService) {
    var vm = this;
    this.allEvents = FirebaseService.array('/events');
    this.remove = function(item){
      vm.allEvents.$remove(item);
    };

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


  }// function ends

]);

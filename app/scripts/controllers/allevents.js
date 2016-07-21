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

    this.allEvents = FirebaseService.array('/events');
    this.remove = function(item){
      console.log(item);
    };


   this.select= function(item) {
    console.log('select');
    this.selected = item;

   };

   this.isActive = function(item) {
     console.log('class');
    return this.selected === item;
   };


  }// function ends

]);

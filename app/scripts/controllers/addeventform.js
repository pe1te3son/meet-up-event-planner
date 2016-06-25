'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:addEventFormCtrl
 * @description
 * # addEventFormCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('addEventFormCtrl', function () {

    this.eventName = '';
    this.submit = function(){
      if(this.eventName){
        console.log('jey');
      }
    };
  });

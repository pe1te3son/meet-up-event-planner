'use strict';

/**
 * @ngdoc service
 * @name eventPlannerApp.firebaseDatabase
 * @description
 * # firebaseDatabase
 * Service in the eventPlannerApp.
 */
angular.module('eventPlannerApp')
  .service('firebaseHelper', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.link = function(){
      return 'https://event-planner-janak.firebaseio.com/';
    };

  });

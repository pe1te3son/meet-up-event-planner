'use strict';

/**
 * @ngdoc service
 * @name eventPlannerApp.firebaseHelpers
 * @description
 * # firebaseHelpers
 * Service in the eventPlannerApp.
 */



angular.module('eventPlannerApp')
  .service('FirebaseService', [ '$firebaseAuth' , function($firebaseAuth){

      this.link = 'https://event-planner-janak.firebaseio.com/';

      this.auth = function(){
        var ref = new Firebase(this.link);
        return $firebaseAuth(ref);
      };
    }
  ]);

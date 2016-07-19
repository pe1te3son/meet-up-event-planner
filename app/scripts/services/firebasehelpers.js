'use strict';

/**
 * @ngdoc service
 * @name eventPlannerApp.firebaseHelpers
 * @description
 * # firebaseHelpers
 * Service in the eventPlannerApp.
 */



angular.module('eventPlannerApp')
  .service('FirebaseService', [ '$firebaseAuth', '$firebaseArray', '$firebaseObject', function($firebaseAuth, $firebaseArray, $firebaseObject){

      this.link = 'https://event-planner-janak.firebaseio.com/';

      this.auth = function(){
        var ref = new Firebase(this.link);
        return $firebaseAuth(ref);
      };

      this.userUid = function(){
        var uid = this.auth().$getAuth().uid;
        return uid;
      };

      this.array = function($arg){
        var ref = new Firebase(this.link + this.userUid() + $arg);
        return $firebaseArray(ref);
      };

      this.obj = function($arg){
        var ref = new Firebase(this.link);
        return $firebaseObject(ref.child($arg));
      };
    }
  ]);

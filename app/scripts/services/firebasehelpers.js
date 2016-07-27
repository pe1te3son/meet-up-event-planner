/**
 * @ngdoc service
 * @name eventPlannerApp.firebaseHelpers
 * @description
 * # firebaseHelpers
 * Service in the eventPlannerApp.
 * Symplifies use of firebase methods throughout the application
 */



angular.module('eventPlannerApp')
  .service('FirebaseService', [ '$firebaseAuth', '$firebaseArray', '$firebaseObject', function($firebaseAuth, $firebaseArray, $firebaseObject){
      'use strict';
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

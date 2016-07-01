'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl', ['$firebaseAuth', 'firebaseHelpers', '$state', function ($firebaseAuth, firebaseHelpers, $state) {
    var ref = new Firebase(firebaseHelpers.firebaseUrl());
    var auth = $firebaseAuth(ref);

    this.$state = $state.current.name;
    console.log(this.$state);
    console.log(auth, $state);

    this.details = {
      /**
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        rememberMe: true
      */
    };

    this.submit = function(isValid){
      console.log(isValid);
      console.log(this.details);
    };

    this.testFun = function(e){
      console.log(e);
    };
  }
]);

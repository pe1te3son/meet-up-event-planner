'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl', ['$firebaseAuth', 'firebaseHelpers', '$state', '$rootScope', function ($firebaseAuth, firebaseHelpers, $state, $rootScope) {
    var ref = new Firebase(firebaseHelpers.firebaseUrl());
    var auth = $firebaseAuth(ref);
    this.$root = $rootScope;
    this.$state = $state.current.name;
    console.log(this.$state);
    console.log(auth);

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
    };

  }
]);

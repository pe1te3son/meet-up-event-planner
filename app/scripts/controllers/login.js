'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl', ['$firebaseAuth', 'firebaseHelpers', '$state', '$stateParams', '$rootScope', function ($firebaseAuth, firebaseHelpers, $state, $stateParams, $rootScope) {
    var ref = new Firebase(firebaseHelpers.firebaseUrl());
    var auth = $firebaseAuth(ref);
    var vm = this;
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

    this.loginUser = function(isValid){
      console.log(isValid);
      ref.authWithPassword({
        email    : vm.details.email,
        password : vm.details.password
      }, function(error, authData) {
        if (error) {
          console.log('Login Failed!', error);
        } else {
          console.log('Authenticated successfully with payload:', authData);
          $state.go('user', { userId: 'peter'});
        }
      });
    };

  }
]);

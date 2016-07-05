'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl', ['$firebaseAuth', 'firebaseHelpers', '$state', '$stateParams', 'currentAuth', function ($firebaseAuth, firebaseHelpers, $state, $stateParams, currentAuth) {
    var ref = new Firebase(firebaseHelpers.firebaseUrl());
    var vm = this;
    var auth = $firebaseAuth(ref);

    this.$state = $state.current.name;
    console.log(currentAuth);
    console.log(auth);

    // any time auth status updates, add the user data to scope
    auth.$onAuth(function(authData) {
      vm.authData = authData;
    });

    if(currentAuth){
      $state.go('user', { userId: 'petejanak'}).then(function(){
        $state.go('allEvents');
      });
    }

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
          vm.userLoggedIn('peter');

        }

      }); //authWithPassword
    };

    this.userLoggedIn = function(userName){

      $state.go('user', { userId: userName}).then(function(){
        $state.go('allEvents');
      });
    };

  }
]);

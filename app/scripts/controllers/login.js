'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl', ['$firebaseAuth', 'FireBase', '$state', '$stateParams', '$rootScope', 'currentAuth', function ($firebaseAuth, FireBase, $state, $stateParams, $rootScope, currentAuth) {
    var ref = new Firebase(FireBase.link);
    var vm = this;


    this.$state = $state.current.name;
    console.log($rootScope);

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

    if(currentAuth){
      console.log('i ran');
      $state.go('user', { userId: 'petejanak'}).then(function(){
        $state.go('allEvents');
      });
    }

  }
]);

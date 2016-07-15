'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl', ['FirebaseService', '$state', '$stateParams', '$rootScope', function (FirebaseService, $state, $stateParams, $rootScope) {
    var vm = this;

    this.sc = $rootScope;

    this.$state = $state.current.name;
    this.rememberMe = true;
    this.spinner = false;
    this.invalidPassword = false;
    this.invalidUser = false;
    this.invalidPassword = false;
    this.logInError = false;

    this.details = {
      /**
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      */
    };

    this.rememberMeFunc = function(value){
      if(!value){
        console.log('sesion');
        return 'sessionOnly';
      } else {
        console.log('def');
        return 'default';
      }
    };

    this.userLoggedIn = function(userName){

      $state.go('user', { userId: userName}).then(function(){
        $state.go('allEvents');
      });
    };

    this.loginUser = function(isValid){

      if(isValid){
        vm.spinner = true;
        FirebaseService.auth().$authWithPassword({
          email: vm.details.email,
          password: vm.details.password
        }, { remember: vm.rememberMeFunc(vm.rememberMe) }).then(function(authData) {
          console.log(authData);
          vm.userLoggedIn('peter');
          vm.spinner = false;

        }).catch(function(error) {
          switch (error.code) {
            case 'INVALID_PASSWORD':
                console.log('The specified user account or password is incorrect.');
                vm.invalidPassword = true;
                vm.details.password = '';
                break;
            case 'INVALID_USER':
                console.log('The specified user account does not exist.');
                vm.invalidUser = true;
                break;
            default:
                vm.logInError = true;
          }
          vm.spinner = false;
        });
      }

    };

    this.registerUser = function(isValid){

      if(isValid){
        vm.spinner = true;
        FirebaseService.auth().$createUser({
          email: vm.details.email,
          password: vm.details.password
        }).then(function(userData) {
          console.log("User created with uid: " + userData.uid);
          $state.go('login');

        }).catch(function(error) {
          console.log(error);
        });
      }

    };

  }
]);

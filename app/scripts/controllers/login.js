'use strict';

/**
 * @ngdoc function
 * @name eventPlannerApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the eventPlannerApp
 */
angular.module('eventPlannerApp')
  .controller('LoginCtrl', ['$firebaseAuth', 'FirebaseService', '$state', '$stateParams', '$rootScope', function ($firebaseAuth, FirebaseService, $state, $stateParams, $rootScope) {
    var ref = new Firebase(FirebaseService.link);
    var auth = $firebaseAuth(ref);
    var vm = this;

    this.sc = $rootScope;

    this.$state = $state.current.name;
    this.invalidPassword = false;
    this.rememberMe = true;

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
      //console.log(vm);
      if(isValid){
        vm.spinner = true;
        auth.$authWithPassword({
          email: vm.details.email,
          password: vm.details.password
        }, { remember: vm.rememberMeFunc(vm.rememberMe) }).then(function(authData) {

          console.log('Logged in as:', authData.uid);
          vm.userLoggedIn('peter');
          vm.spinner = false;

        }).catch(function(error) {
          switch (error.code) {
            case 'INVALID_PASSWORD':
                //errorMsg += '* The specified user account or password is incorrect.';
                console.log('The specified user account or password is incorrect.');
                vm.invalidPassword = true;
                vm.details.password = '';
                break;
            case 'INVALID_USER':
                //errorMsg += '* The specified user account does not exist.';
                console.log('The specified user account does not exist.');
                vm.invalidUser = true;
                break;
            default:
                vm.logInError = true;
                //errorMsg = 'Error logging user in: ' + error;
          }

          vm.spinner = false;

        });
      }

    };

  }
]);

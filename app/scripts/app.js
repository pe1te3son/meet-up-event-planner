'use strict';

/**
 * @ngdoc overview
 * @name eventPlannerApp
 * @description
 * # eventPlannerApp
 *
 * Main module of the application.
 */
angular
  .module('eventPlannerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'firebase'
  ])
  .run(['$rootScope', '$state', 'FirebaseService', function($rootScope, $state, FirebaseService) {

    // If sesion still active redirect user to all events page
    if(FirebaseService.auth().$getAuth()){
      $state.go('user', { userId: FirebaseService.auth().$getAuth().uid }).then(function(){
          $state.go('allEvents');
        });
    } else {
      $state.go('login');
    }

    // Display spinner on view change
    $rootScope.$on('$stateChangeStart', function(){
      //event, toState, toParams, fromState, fromParams
      $('.page-loading').removeClass('hidden');
    });

    $rootScope.$on('$stateChangeSuccess', function(){
        $('.page-loading').addClass('hidden');
    });

  }])
  .config(function($stateProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl as currentUser',
      resolve: {
       // controller will not be loaded until $waitForAuth resolves
       // Auth refers to our $firebaseAuth wrapper in the example above
       'currentAuth': ['FirebaseService', function(FirebaseService) {
         // $waitForAuth returns a promise so the resolve waits for it to complete
         var auth = FirebaseService.auth();
         return auth.$waitForAuth();
       }]
     }
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'LoginCtrl as currentUser',
      resolve: {
         'currentAuth': ['FirebaseService', function(FirebaseService) {
           var auth = FirebaseService.auth();
           return auth.$waitForAuth();
         }]
       }
    })
    .state('user', {
      url: '/:userId',
      templateUrl: 'views/user.html',
      controller: 'ControlpanelCtrl as user',
      redirectTo: 'user.allEvents',
      resolve: {
       'currentAuth': ['FirebaseService', function(FirebaseService) {
         var auth = FirebaseService.auth();
         return auth.$waitForAuth();
       }]
     }
    })
    .state('addEventForm', {
      url: '/add-new',
      templateUrl: 'views/user.addFormView.html',
      controller: 'AddeventformCtrl as form',
      parent: 'user',
      resolve: {
       'currentAuth': ['FirebaseService', function(FirebaseService) {
         var auth = FirebaseService.auth();
         return auth.$waitForAuth();
       }]
     }

    })
    .state('allEvents', {
      url: '/events',
      templateUrl: 'views/user.allevents.html',
      controller: 'AlleventsCtrl as events',
      parent: 'user',
      resolve: {
        'getEvents': ['FirebaseService', function(FirebaseService){
          var list = FirebaseService.array('/events');
          return list.$loaded();
        }]
      }

    });

});

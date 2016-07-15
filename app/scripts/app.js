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
  .run(['$rootScope', '$state', 'FirebaseService', '$firebaseArray', function($rootScope, $state, FirebaseService, $firebaseArray) {

    console.log(FirebaseService);
    if(FirebaseService.auth().$getAuth()){
      $state.go('user', { userId: 'petejanak'}).then(function(){
          $state.go('allEvents');
        });
    } else {
      $state.go('login');
    }

    var database = $firebaseArray(new Firebase(FirebaseService.link));
    console.log(database);

    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === 'AUTH_REQUIRED') {
        console.log('auth req');
        $state.go('login');
      }
    });

  }])
  .config(function($stateProvider) {
  // For any unmatched url, redirect to /state1
  //$urlRouterProvider.otherwise('/login');
  //
  // Now set up the states

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
    .state('user', {
      url: '/:userId',
      templateUrl: 'views/user.html',
      controller: 'ControlpanelCtrl as user',
      redirectTo: 'user.allEvents',
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
    .state('addEventForm', {
      url: '/add-new',
      templateUrl: 'views/user.addFormView.html',
      controller: 'AddeventformCtrl as form',
      parent: 'user'

    })
    .state('allEvents', {
      url: '/events',
      templateUrl: 'views/user.allevents.html',
      controller: 'AlleventsCtrl as events',
      parent: 'user'

    });

});

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
  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise('/login');
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl as login'
    })
    .state('addEventForm', {
      url: '/add-new',
      templateUrl: 'views/addformview.html',
      controller: 'AddeventformCtrl as form'
    })
    .state('allEvents', {
      url: '/events',
      templateUrl: 'views/allevents.html',
      controller: 'AlleventsCtrl as events'
    });
    // .state('state1.list', {
    //   url: '/list',
    //   templateUrl: 'partials/state1.list.html',
    //   controller: function($scope) {
    //     $scope.items = ['A', 'List', 'Of', 'Items'];
    //   }
    // })
    // .state('state2', {
    //   url: '/state2',
    //   templateUrl: 'partials/state2.html'
    // })
    // .state('state2.list', {
    //   url: '/list',
    //   templateUrl: 'partials/state2.list.html',
    //   controller: function($scope) {
    //     $scope.things = ['A', 'Set', 'Of', 'Things'];
    //   }
    // });
});

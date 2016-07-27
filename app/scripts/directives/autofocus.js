/**
 * @ngdoc directive
 * @name eventPlannerApp.directive:autofocus
 * @description
 * # autofocus
 * Custom directive to replace defaul html autofocus as it isn`t working
 * when changing views.
 */
angular.module('eventPlannerApp')
  .directive('autofocus', ['$timeout', function($timeout) {
    'use strict';
    return {
      restrict: 'A',
      link : function($scope, $element) {
        $timeout(function() {
          $element[0].focus();
        });
      }
    };
  }]);

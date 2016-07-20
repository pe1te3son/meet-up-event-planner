'use strict';

/**
 * @ngdoc directive
 * @name eventPlannerApp.directive:autofocus
 * @description
 * # autofocus
 */
angular.module('eventPlannerApp')
  .directive('autofocus', ['$timeout', function($timeout) {
    return {
      restrict: 'A',
      link : function($scope, $element) {
        $timeout(function() {
          $element[0].focus();
        });
      }
    };
  }]);

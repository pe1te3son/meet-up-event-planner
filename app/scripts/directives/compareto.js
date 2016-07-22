'use strict';

/**
 * @ngdoc directive
 * @name eventPlannerApp.directive:compareTo
 * @description
 * # compareTo
 * Compares 2 inputs. Used to validate passwords
 */
angular.module('eventPlannerApp')
  .directive('compareTo', function() {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: '=compareTo'
        },
        link: function(scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue === scope.otherModelValue;
            };

            scope.$watch('otherModelValue', function() {
                ngModel.$validate();
            });
        }
    };
});

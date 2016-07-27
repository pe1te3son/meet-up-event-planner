/**
 * @ngdoc directive
 * @name eventPlannerApp.directive:dateValidation
 * @description
 * # dateValidation
 * Validates date and time
 * Requires moment.js
 * Make sure that you passing correct moment.js format YYYY-MM-DD HH:mm = 2016-07-22 16:55
 */
 angular.module('eventPlannerApp')
   .directive('pastNot', function() {
    'use strict';

    // Event can not HAPPEN in the past
     return {
         restrict: 'A',

         require: 'ngModel',
         scope: {
           pastNotValue: '=pastNot'
         },

         link: function(scope, element, attributes, ngModel) {
             ngModel.$validators.pastNot = function(modelValue) {
               return moment(modelValue , 'YYYY-MM-DD HH:mm').isSameOrAfter(moment(scope.pastNotValue, 'YYYY-MM-DD HH:mm'));
             };
             scope.$watch('pastNotValue', function() {
                 ngModel.$validate();
             });
         }
     };
 });

 angular.module('eventPlannerApp')
   .directive('laterThan', function() {
    'use strict';

      // Event can not END in the past
     return {
         restrict: 'A',

         require: 'ngModel',
         scope: {
           otherModelValue: '=laterThan'
         },

         link: function(scope, element, attributes, ngModel) {
             ngModel.$validators.laterThan = function(modelValue) {
               return moment(modelValue , 'YYYY-MM-DD HH:mm').isSameOrAfter(moment(scope.otherModelValue, 'YYYY-MM-DD HH:mm'));
             };
             scope.$watch('otherModelValue', function() {
                 ngModel.$validate();
             });
         }
     };
 });

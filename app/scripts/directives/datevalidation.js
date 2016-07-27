'use strict';

/**
 * @ngdoc directive
 * @name eventPlannerApp.directive:dateValidation
 * @description
 * # dateValidation
 */
 angular.module('eventPlannerApp')
   .directive('pastNot', function() {
     // Requires moment.js
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
     // Requires moment.js
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

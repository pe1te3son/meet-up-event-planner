'use strict';

/**
 * @ngdoc directive
 * @name eventPlannerApp.directive:cuLabel
 * @description
 * # cuLabel
 */
angular.module('eventPlannerApp')
  .directive('cuLabel', function () {
    return {
      restrict: 'A',
      scope : {
        cuLabel: "="
      },
      link: function(scope, element, attrs) {
        console.log(attrs);
         //console.log(element);
        console.log(scope);


        element.on('focus', function(){
          console.log(element.parent().find('label'));
        });

        // attrs.$observe('cuLabel', function(val){
        //   console.log(val);
        // });
      }
    };
  });

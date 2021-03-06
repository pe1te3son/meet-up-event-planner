/**
 * @ngdoc directive
 * @name eventPlannerApp.directive:cuLabel
 * @description
 * # cuLabel
 * label animation
 */
angular.module('eventPlannerApp')
  .directive('cuLabel', function () {
    'use strict';
    
    return {
      restrict: 'A',
      //scope, element, attrs
      link: function(scope, element) {
        element.change(function(){
          var el = element.parent().find('label');
          if(element.val().length){
            el.addClass('label-animated');
          }
        });

        element.on('focus', function(){
          var el = element.parent().find('label');
          if(el.hasClass('label-animated-off')){
            el.removeClass('label-animated-off');
          }
          el.addClass('label-animated highlight');
        });

        element.on('blur', function(){
          var el = element.parent().find('label');
          if(!element.val().length){
            el.removeClass('label-animated');
            el.addClass('label-animated-off');
          }
          el.removeClass('highlight');
        });

      }
    };
  });

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
      //scope, element, attrs
      link: function(scope, element, attrs) {
        console.log(attrs);
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

'use strict';

/**
 * @ngdoc service
 * @name eventPlannerApp.firebaseHelpers
 * @description
 * # firebaseHelpers
 * Factory in the eventPlannerApp.
 */
angular.module('eventPlannerApp')
  .factory('firebaseHelpers', function () {
    // Service logic
    // ...

    var firebaseLink = 'https://event-planner-janak.firebaseio.com/';

    // Public API here
    return {
      firebaseUrl: function () {
        return firebaseLink;
      }
    };
  });

angular.module('eventPlannerApp')
  .factory('Auth', ['$firebaseAuth',
    function($firebaseAuth) {
      var ref = new Firebase('https://event-planner-janak.firebaseio.com/');
      return $firebaseAuth(ref);
    }
  ]);

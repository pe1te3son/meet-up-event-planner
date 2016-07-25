'use strict';

describe('Controller: AlleventsCtrl', function () {

  // load the controller's module
  beforeEach(module('eventPlannerApp'));

  var AlleventsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AlleventsCtrl = $controller('AlleventsCtrl', {
      $scope: scope,
      // place here mocked dependencies
    });
  }));

});

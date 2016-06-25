'use strict';

describe('Controller: addEventFormCtrl', function () {

  // load the controller's module
  beforeEach(module('eventPlannerApp'));

  var addEventFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    addEventFormCtrl = $controller('addEventFormCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be an Object', function () {
    expect(addEventFormCtrl.event).toEqual(jasmine.any(Object));
  });
});

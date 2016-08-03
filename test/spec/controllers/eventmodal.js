'use strict';

describe('Controller: EventmodalCtrl', function () {

  // load the controller's module
  beforeEach(module('eventPlannerApp'));

  var EventmodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventmodalCtrl = $controller('EventmodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EventmodalCtrl.awesomeThings.length).toBe(3);
  });
});

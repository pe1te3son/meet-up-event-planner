'use strict';

describe('Controller: AddeventformCtrl', function () {

  // load the controller's module
  beforeEach(module('eventPlannerApp'));

  var AddeventformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddeventformCtrl = $controller('AddeventformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be an Object', function () {
    expect(AddeventformCtrl.event).toEqual(jasmine.any(Object));
  });
});

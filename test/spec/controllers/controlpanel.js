'use strict';

describe('Controller: ControlpanelCtrl', function () {

  // load the controller's module
  beforeEach(module('eventPlannerApp'));

  var ControlpanelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ControlpanelCtrl = $controller('ControlpanelCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    // expect(ControlpanelCtrl.awesomeThings.length).toBe(3);
  });
});

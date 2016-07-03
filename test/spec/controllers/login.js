'use strict';

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('eventPlannerApp'));

  var LoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be an object', function () {
    expect(LoginCtrl.details).toEqual(jasmine.any(Object));
  });

  it('$state must be defined', function(){
    expect(LoginCtrl.$state).toBeDefined();
  });
});

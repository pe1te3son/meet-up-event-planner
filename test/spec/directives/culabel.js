'use strict';

describe('Directive: cuLabel', function () {

  // load the directive's module
  beforeEach(module('eventPlannerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    console.log(element, $compile);
    // element = angular.element('<cu-label></cu-label>');
    // element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the cuLabel directive');
  }));
});

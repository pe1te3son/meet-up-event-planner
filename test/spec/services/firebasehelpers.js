'use strict';

describe('Service: firebaseHelpers', function () {

  // load the service's module
  beforeEach(module('eventPlannerApp'));

  // instantiate service
  var firebaseHelpers;
  beforeEach(inject(function (_firebaseHelpers_) {
    firebaseHelpers = _firebaseHelpers_;
  }));

  it('should do something', function () {
    expect(!!firebaseHelpers).toBe(true);
  });

});

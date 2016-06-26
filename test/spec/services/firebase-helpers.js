'use strict';

describe('Service: firebaseHelper', function () {

  // load the service's module
  beforeEach(module('eventPlannerApp'));

  // instantiate service
  var firebaseHelper;
  beforeEach(inject(function (_firebaseHelper_) {
    firebaseHelper = _firebaseHelper_;
  }));

  it('should do something', function () {
    expect(!!firebaseHelper).toBe(true);
  });

  it('should not be empty string', function () {
    expect(firebaseHelper.link()).toBeTruthy();
  });

});

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

  it('should have a correct url', function(){
    String.prototype.startsWith = function(prefix) {
      return this.indexOf(prefix) === 0;
    };

    expect(firebaseHelpers.firebaseUrl().startsWith('https://')).toBe(true);
  });

});

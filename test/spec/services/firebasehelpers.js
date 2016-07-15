'use strict';

describe('Service: FirebaseService', function () {

  // load the service's module
  beforeEach(module('eventPlannerApp'));

  // instantiate service
  var FirebaseService;
  beforeEach(inject(function (_FirebaseService_) {
    FirebaseService = _FirebaseService_;
  }));

  it('should do something', function () {
    expect(!!FirebaseService).toBe(true);
  });

  it('should have a correct url', function(){
    String.prototype.startsWith = function(prefix) {
      return this.indexOf(prefix) === 0;
    };

    expect(FirebaseService.link.startsWith('https://')).toBe(true);
  });

});

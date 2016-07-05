'use strict';

describe('Service: FireBase', function () {

  // load the service's module
  beforeEach(module('eventPlannerApp'));

  // instantiate service
  var FireBase;
  beforeEach(inject(function (_FireBase_) {
    FireBase = _FireBase_;
  }));

  it('should do something', function () {
    expect(!!FireBase).toBe(true);
  });

  it('should have a correct url', function(){
    String.prototype.startsWith = function(prefix) {
      return this.indexOf(prefix) === 0;
    };

    expect(FireBase.link.startsWith('https://')).toBe(true);
  });

});

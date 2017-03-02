'use strict';

describe('Service: Zjcservice', function () {

  // load the service's module
  beforeEach(module('ZjcApp'));

  // instantiate service
  var Zjcservice;
  beforeEach(inject(function (_Zjcservice_) {
    Zjcservice = _Zjcservice_;
  }));

  it('should do something', function () {
    expect(!!Zjcservice).toBe(true);
  });

});

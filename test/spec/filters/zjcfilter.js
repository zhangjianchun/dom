'use strict';

describe('Filter: zjcfilter', function () {

  // load the filter's module
  beforeEach(module('zjcApp'));

  // initialize a new instance of the filter before each test
  var zjcfilter;
  beforeEach(inject(function ($filter) {
    zjcfilter = $filter('zjcfilter');
  }));

  it('should return the input prefixed with "zjcfilter filter:"', function () {
    var text = 'angularjs';
    expect(zjcfilter(text)).toBe('zjcfilter filter: ' + text);
  });

});

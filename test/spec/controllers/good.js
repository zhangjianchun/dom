'use strict';

describe('Controller: GoodCtrl', function () {

  // load the controller's module
  beforeEach(module('zjcApp'));

  var GoodCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GoodCtrl = $controller('GoodCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

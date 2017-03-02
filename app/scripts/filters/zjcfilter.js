'use strict';

angular.module('zjcApp')
  .filter('zjcfilter', function () {
    return function (input) {
      return 'zjcfilter filter: ' + input;
    };
  });

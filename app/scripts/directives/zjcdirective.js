'use strict';

angular.module('zjcApp')
  .directive('zjcdirective', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the zjcdirective directive');
      }
    };
  });

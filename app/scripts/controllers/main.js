'use strict';

angular.module('zjcApp')
    .controller('MainCtrl', function(Zjcservice, $scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'MainCtrl-MainCtrl-MainCtrlMainCtrl-MainCtrl-MainCtrl'
        ];

      Zjcservice.GET('api/json').success(function(data){
      	$scope.box=data;
      })
 
         Zjcservice.JSONP('.cn').success(function(data) {
            $scope.events =data
        });
        
    });

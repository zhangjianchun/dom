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
      	// $scope.box=data;
      })
       Zjcservice.GET('a/carousels').success(function(data){
       	console.log(data)
      	$scope.carousels=data.carousels;
      })
     
  
 
         Zjcservice.JSONP('.cn').success(function(data) {
      	// $scope.carousels=$scope.box.carousels;
            $scope.events =data
        });
        
    });

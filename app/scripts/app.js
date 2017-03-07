'use strict';


  angular.module('zjcApp', [
  'ui.router'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];
      .state('index', {
        url: '/index',
        templateUrl: 'views/main.html',
        controller:'MainCtrl'
      })
    .state('/contact', {
      url:'contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .state('/about', {
      url:'about:',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('/home', {
      url:'home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .state('/good', {
      templateUrl: 'views/good.html',
      controller: 'GoodCtrl'
    })
    .state('/news', {
      templateUrl: 'views/news.html',
      controller: 'NewsCtrl'
    })
    .state('/details', {
      templateUrl: 'views/details.html',
      controller: 'DetailsCtrl'
    })
    $urlRouterProvider.otherwise('');
  })





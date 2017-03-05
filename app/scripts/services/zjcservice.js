'use strict';

angular.module('zjcApp')
    // .service('Zjcservice', function Zjcservice() {
    .service('Zjcservice', function Zjcservice($http) {
        // AngularJS will instantiate a singleton by calling "new" on this function
           var githubUrl = 'mock.Datag';
        var runUserRequest = function(username) {
            // 从使用JSONP调用Github API的$http服务中返回promise
            return $http({
                method: 'GET',
                url: githubUrl + 
                    username //+'?callback=JSON_CALLBACK'
            });
        };
        return {
            JSONP: function(username) {
                return runUserRequest(username)
            },
            GET: function(a) {
                
                return $http.get(a)
            }
        }
    });
//   

// angular.module('zjcApp')
//     .factory('Zjcservice', function($http) {
//         var githubUrl = 'api/json';
//         var runUserRequest = function(username, path) {
//             // 从使用JSONP调用Github API的$http服务中返回promise
//             return $http({
//                 method: 'git',
//                 url: githubUrl 
//             });
//         };
//          // 返回带有一个events函数的服务对象
//         return {
//             events: function(username) {
//                 return runUserRequest(username, 'events');

//             }
//         };
//     });

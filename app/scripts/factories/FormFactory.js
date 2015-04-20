'use strict';

angular
    .module('personalWebsiteApp')
    .factory('FormFactory', ['$http', '$window', function($http, $window){

            var email = function(email_params) {
                debugger
                return $http.post('https://lit-hamlet-4007.herokuapp.com/email', email_params).success(function(response){
                    console.log('Sent!');
                }).error(function(data,status,headers,config){
                    console.log('Youre doing it wrong ' + data, status, headers, config);
                });
            };

            return {
                email: email
            };
    }]);

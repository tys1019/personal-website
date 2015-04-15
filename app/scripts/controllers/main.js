'use strict';

/**
 * @ngdoc function
 * @name personalWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalWebsiteApp
 */
angular.module('personalWebsiteApp')
  .controller('MainCtrl', function ($scope) {
    var vm = this;

    vm.openModal = function() {
        $('#email-form').openModal();
    }


});

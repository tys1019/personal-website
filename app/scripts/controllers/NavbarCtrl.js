
'use strict';

angular
    .module('personalWebsiteApp')
    .controller('NavbarCtrl', navbarCtrl);

navbarCtrl.$inject = ['$location'];

function navbarCtrl($location) {
    var vm = this;

    vm.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };



}


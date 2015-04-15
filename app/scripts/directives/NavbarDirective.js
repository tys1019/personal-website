'use strict';

angular.module('personalWebsiteApp').directive('dtNavbar', [function(){
    return {
        restrict: 'EA',
        templateUrl: 'views/navbar.html',
        controller: 'NavbarCtrl',
        controllerAs: 'navbarCtrl',
        bindToController: true
    }
}])

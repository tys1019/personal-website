'use strict';

angular.module('personalWebsiteApp').directive('dtFooter', [function(){
    return {
        restrict: 'EA',
        templateUrl: 'views/footer.html',
        controller: 'FooterCtrl',
        controllerAs: 'footerCtrl',
        bindToController: true
    }
}])

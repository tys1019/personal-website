'use strict';

angular.module('personalWebsiteApp').directive('dtImageSlider', [function(){
    return {
        restrict: 'EA',
        templateUrl: 'views/imageslider.html',
        controller: 'ImageSliderCtrl',
        controllerAs: 'imageSliderCtrl',
        bindToController: true,
        link: function(scope, elem, attrs) {
            $( window ).resize(function() {
                $('.slider').height($('.slide').height());
            });
        }
    }
}])

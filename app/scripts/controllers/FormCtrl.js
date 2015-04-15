'use strict';

angular.module('personalWebsiteApp')
  .controller('FormCtrl', formCtrl);

formCtrl.$inject = ['FormFactory'];

function formCtrl (FormFactory) {
    var vm = this;


    vm.sendEmail = function() {
        var vm = this;

        FormFactory.email(vm.email_params).then(function(){
            vm.email_params.email_body = null;
            vm.email_params.first_name = null;
            vm.email_params.last_name = null;
            vm.email_params.email = null;

            $('#email-form').closeModal();
        });


    }


}

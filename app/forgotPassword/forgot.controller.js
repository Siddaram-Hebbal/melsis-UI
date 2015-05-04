(function () {
    'use strict';

    angular
        .module('app')
        .controller('ForgotController', ForgotController);

    ForgotController.$inject = ['$location','FlashService'];
    function ForgotController($location,FlashService) {
        var vm = this;

        vm.forgotPassword = forgotPassword;

        (function initController() {
            // reset login status
           // AuthenticationService.ClearCredentials();
        })();

        function forgotPassword() {
          //  vm.dataLoading = true;
           /* AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });*/
            FlashService.Success('Password reset successful', true);
        };
    }

})();

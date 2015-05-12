(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', 'AuthenticationService', 'UserDetails','FlashService','$rootScope','$scope'];
    function LoginController($location, AuthenticationService, UserDetails,FlashService,$rootScope,$scope) {
        var vm = this;
        $scope.UserDetails = UserDetails; 
        vm.login = login;
      
        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    console.log('response usertype --- '+response.type);
                   
                        $scope.setSomeData(response.type);
                      //  UserDetails.setData(response.type);
                        UserDetails.create('1',response.type);
                        $location.path('/routeSid');
                } else {
                    FlashService.Error(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();

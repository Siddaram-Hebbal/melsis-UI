(function () {
    'use strict';

    angular
        .module('app')
        .controller('UiSidController', UiSidController);

    UiSidController.$inject = ['$location', 'AuthenticationService', 'FlashService','$rootScope','$scope','UserDetails'];
    function UiSidController($location, AuthenticationService, FlashService,$rootScope,$scope,UserDetails) {
        var vm = this;

     $scope.isAdmin = false;
     $scope.isStaff = false;
     $scope.isParent = false;
      console.log('test getData --- '+$scope.getSomeData());
      console.log('test data from Service ---- '+UserDetails.getUserRoles());
      $scope.userRole = $scope.getSomeData();
      if($scope.userRole == 'admin'){
            $scope.isAdmin = true;
      }
      if($scope.userRole == 'staff'){
            $scope.isStaff = true;
      }
      if($scope.userRole == 'parent'){
            $scope.isParent = true;
      }
     
        (function initController() {
            // reset login status
            //AuthenticationService.ClearCredentials();
        })();

        $scope.template = {
    "admin": "admin/adminDashboard.html",
    "parent": "app-content/parentDashboard.html",
    "staff": "app-content/staffDashboard.html"
  }
  
  $scope.message={
    
     "admin":"Message from Admin --> template",
     "parent":"Message from Parent --> template",
     "staff":"Message from Staff --> template"
     
   }
    }

})();

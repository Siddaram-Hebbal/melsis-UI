(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$location', '$rootScope','$scope'];
    function MainController($location,$rootScope,$scope) {
        
        $scope.usertype = '';
        $scope.setSomeData = function (userType){
        console.log('in MainController service setting userType as '+userType);
        $scope.usertype = userType;
      } 

      $scope.getSomeData = function(){
        return $scope.usertype;
      }
    }

})();

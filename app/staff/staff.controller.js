//StaffController
(function () {
    'use strict';

    angular
        .module('app')
        .controller('StaffController', StaffController);

    StaffController.$inject = ['$location', '$rootScope','$scope','$http'];
    function StaffController($location,$rootScope,$scope,$http) {
        var vm = this;
        $scope.title = 'iam from ui router states Controller';
        $scope.staffUser = {
        	email : 'demo@email.com',
        	firstName : 'Mohammed Safi ',
        	lastName : 'Siddiqui',
        	phone : 'xxx-abc-asdqwe',
        	dob : '12-12-2012',
        	address : 'place a call to get my place',
        	zipcode : '11909'
        };

        $http.get('http://api.randomuser.me/?results=20').success(function(data) {
		    $scope.users = data.results;
		    $('#loader').hide();
		    $('#userList').show();
		  }).error(function(data, status) {
		    alert('get data error!');
		  });

		 $scope.showUserModal = function(idx){
		    var user = $scope.users[idx].user;
		    $scope.currUser = user;
		    $('#myModalLabel').text(user.name.first
		         + ' ' + user.name.last);
		    $('#myModal').modal('show');
		  }
    }

})();

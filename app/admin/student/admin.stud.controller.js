//Admin - StudentController
(function () {
    'use strict';

    angular
        .module('app')
        .controller('AdminStudController', AdminStudController);

    AdminStudController.$inject = ['$location', '$rootScope','$scope','$http','AdminStudentService'];
    function AdminStudController($location,$rootScope,$scope,$http,AdminStudentService) {
       		 var vm = this;
       		 vm.newStudentAdmission = newStudentAdmission;


       	//newStudentAdmission
       	  function newStudentAdmission() {
       	  		console.log('inside AdminStudController  -- '+vm.firstName+'  '+vm.middleName);
       	  		 var studentDetails = {
                firstName : vm.firstName,
                middleName : vm.middleName,
                lastName : vm.lastName,
                dob : vm.dob,
                postalAddress1 : vm.postalAddress1,
                postalAddress2 : vm.postalAddress2,
                phoneNumber : vm.phoneNumber,
                inputEmail : vm.inputEmail,
                city : vm.city,
                state : vm.state,
                role : vm.role
                     
       		 };
       	  
       	  	AdminStudentService.NewStudentAdmission(studentDetails,function(response)
       	  		{	
       	  			console.log('response in controller');
       	  		});
       	  	
       	  };
    }

})();

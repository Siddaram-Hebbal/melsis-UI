(function () {
    'use strict';

    angular
        .module('app')
        .factory('AdminService', AdminService);

    AdminService.$inject = ['$http'];
    function AdminService($http) {
        var service = {};
       
        service.CreateNewStudent = CreateNewStudent;
        return service;

        
        function CreateNewStudent(studentDetails) {
        	console.log('in CreateNewStudent AdminService');
        	console.log('studentDetails firstName --- '+studentDetails.firstName);
        	console.log('studentDetails middleName --- '+studentDetails.middleName);
        	console.log('studentDetails lastName--- '+studentDetails.lastName);
        	console.log('studentDetails dob--- '+studentDetails.dob);
        	console.log('studentDetails postalAddress1--- '+studentDetails.postalAddress1);
        	console.log('studentDetails postalAddress2--- '+studentDetails.postalAddress2);
        	console.log('studentDetails phoneNumber--- '+studentDetails.phoneNumber);
        	console.log('studentDetails inputEmail--- '+studentDetails.inputEmail);
        	console.log('studentDetails city--- '+studentDetails.city);
            return $http.post('/api/student/createStudent', studentDetails).then(handleSuccess, handleError('Error creating user'));
        }

       
        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
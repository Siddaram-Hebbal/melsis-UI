(function () {
    'use strict';

    angular
        .module('app')
        .factory('AdminStudentService', AdminStudentService);

    AdminStudentService.$inject = ['$http', '$cookieStore', '$rootScope','AdminService' ];
    function AdminStudentService($http, $cookieStore, $rootScope,AdminService) {
        var service = {};
        service.NewStudentAdmission = NewStudentAdmission;
      
        return service;

        function NewStudentAdmission(studentDetails, callback) {
                var response;
                console.log('In NewStudentAdmission');
                AdminService.CreateNewStudent(studentDetails)
                    .then(function (result) {
                        response = result;
                        callback(response);
                    });
            }

}

})();
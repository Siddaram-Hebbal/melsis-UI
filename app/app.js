(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'home/home.view.html',
                controllerAs: 'vm'
            })
            .when('/routeSid', {
                 controller: 'UiSidController',
                 templateUrl: 'app-content/uirouter.html',
               
                controllerAs: 'vm'
            })


            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'login/login.view.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'register/register.view.html',
                controllerAs: 'vm'
            }).when('/adminDashboard', {
               // controller: 'ForgotController',
                templateUrl: 'adminDashboard/adminDashboard.view.html',
                controllerAs: 'vm'
            })  
            .when('/forgot', {
                controller: 'ForgotController',
                templateUrl: 'forgotPassword/forgot.view.html',
                controllerAs: 'vm'
            })    
            .otherwise({ redirectTo: '/login' });
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        
        if ($rootScope.globals.currentUser) {
        //    $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

/*Problem
$locationChangeStart : Broadcasted before a URL will change. Type: broadcast, Target: root scope
$.inArray : Search for a specified value within an array and return its index (or -1 if not found).
Solution :
$locationChangeStart is the eventName,
function (event, next, current) : is the listner
Syntax : $on(name, listener);
Implement a listener on the $locationChangeStart event to track the change in url/location. Redirect to a login page if the user is not yet logged in.    
*/
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register','/forgot','/routeSid']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
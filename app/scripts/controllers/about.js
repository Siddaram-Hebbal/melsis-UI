'use strict';

/**
 * @ngdoc function
 * @name collegeProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the collegeProjectApp
 */
angular.module('collegeProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

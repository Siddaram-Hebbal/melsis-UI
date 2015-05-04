'use strict';

/**
 * @ngdoc function
 * @name collegeProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the collegeProjectApp
 */
angular.module('collegeProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

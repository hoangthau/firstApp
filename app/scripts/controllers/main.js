'use strict';

/**
 * @ngdoc function
 * @name firstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstApp
 */
angular.module('firstApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

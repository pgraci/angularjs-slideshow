'use strict';

/**
 * @ngdoc function
 * @name angularSlideshowApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularSlideshowApp
 */
angular.module('angularSlideshowApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

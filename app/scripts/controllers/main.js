'use strict';

/**
 * @ngdoc function
 * @name angularSlideshowApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularSlideshowApp
 */
angular.module('angularSlideshowApp')
  .controller('MainCtrl', function ($scope) {

  // initializing the time Interval
    $scope.myInterval = 5000;

   // Initializing slide array
    $scope.slides = [
      {
        image:'http://openphoto.net/volumes/rainnight/20041207/openphotonet_img0099.JPG',
        title:'Cute Fish',
        caption: 'this is awesome'
      },
      {
        image:'http://openphoto.net/volumes/rainnight/20041207/openphotonet_img0097.JPG',
        title:'Image2',
        caption: 'this is awesome'
      },
      {
        image:'http://openphoto.net/volumes/mike/20100915/openphotonet_IMG_1183.JPG',
        title:'Image3',
        caption: 'this is awesome'
      },
      {
        image:'http://openphoto.net/volumes/miro/20111215/openphotonet_PC137266.jpg',
        title:'MAGIC LANDSCAPE',
        caption: 'An amazing landscape in Zagreb, Croatia.'
      }
    ];

    //var slides = $scope.slides;
  });

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

    $scope.slidespeed = 4000;

    $scope.slides = [
      {
        image:'http://openphoto.net/volumes/philgraci/20150409/openphotonet_2014-07-04%2017.49.21.jpg',
        title:'JAMAICA FISHING BOATS',
        caption: 'Fishing boats at Retreat Beach, St Thomas, Jamaica.'
      },
      {
        image:'http://openphoto.net/volumes/rainnight/20041207/openphotonet_img0099.JPG',
        title:'SUNSET',
        caption: 'Sunset on a lake in Taiwan'
      },
      {
        image:'http://openphoto.net/volumes/mike/20100915/openphotonet_IMG_1183.JPG',
        title:'TRAIN BRIDGE',
        caption: 'Rowing down the Schyukill River in Philadelphia.'
      },
      {
        image:'http://openphoto.net/volumes/miro/20111215/openphotonet_PC137266.jpg',
        title:'MAGIC LANDSCAPE',
        caption: 'An amazing landscape in Zagreb, Croatia.'
      }
    ];

  });

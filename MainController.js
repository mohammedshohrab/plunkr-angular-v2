
(function() {
"use strict";

  var app = angular.module("gitHubViewer");
  var MainController = function($scope,$interval,$location) {


    $scope.countdown = 5;
    $scope.username = "reactjs";
    
    var countDownInterval = null;

    var decrementCountDown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown === 0) {
        $scope.search($scope.username);
      }
    };

    var startCountDown = function() {
      countDownInterval = $interval(decrementCountDown, 1000, 5);
    };

    $scope.search = function(username) {
      if(countDownInterval){
        $interval.cancel(countDownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/"+username);
    };

    startCountDown();
  }
  app.controller("MainController",MainController);
}());
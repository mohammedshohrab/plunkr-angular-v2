(function() {
  "use strict";

  var app = angular.module("gitHubViewer");
  var UserController = function($scope, github,$routeParams) {

    var onComplete = function(data) {
      $scope.person = data;
      github.getRepos($scope.person)
        .then(onRepos, onError);
    };
    var onRepos = function(data) {
      $scope.repos = data;
    };
    var onError = function(error) {
      $scope.error = error.data.message;
    };
    
    $scope.sort = "stargazers_count";
    $scope.username = $routeParams.username;
    github.getUser($scope.username)
          .then(onComplete,onError);
  }
  app.controller("UserController",UserController);
}());
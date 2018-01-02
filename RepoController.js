(function(){
  "use strict";
  var app = angular.module("gitHubViewer");
  var RepoController = function($scope,$routeParams,github){
    var reponame = $routeParams.reponame;
    var username = $routeParams.username;
    
    var onRepo = function(data) {
      $scope.repo = data;
    };
    var onError = function(error) {
      $scope.error = error.data.message;
    };
    
    github.getRepoDetails(username,reponame)
          .then(onRepo,onError);
    
  };
  app.controller("RepoController",RepoController);
}());
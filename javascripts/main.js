angular.module('senayar', ['ngMaterial', 'ngAnimate'],  function($locationProvider) {
  $locationProvider.hashPrefix('');
});

angular.module('senayar').controller('homeCtrl', ['$scope', 'githubService', function($scope, githubService) {
  $scope.username = 'rbinsztock';
  $scope.getGitInfo = function() {
    $scope.userNotFound = false;
    $scope.reposNotFound = false;
    githubService.checkIfUserExist($scope.username)
      .then(function(data) {
        if (data != null) {
          $scope.loaded = true;
          $scope.userInfo = data;
        }
        else {
          $scope.userNotFound = true;
        }
        githubService.getUserRepos($scope.username)
          .then(function(data) {
            if (data != null) {
              $scope.repos = data;
              $scope.reposFound = data.length > 0;
            }
          }, function(error) {
            $scope.reposNotFound = true;
          });
      }, function(error) {
        $scope.userNotFound = true;
      });
  };

}]);

angular.module('senayar').service('githubService', ['$http', '$q', function($http, $q) {
  this.checkIfUserExist = function(username) {
    return $http.get("https://api.github.com/users/" + username);
  };

  this.getUserRepos =  function(username) {
    return $http.get("https://api.github.com/users/" + username + "/repos");
  };
}]);

angular.module('senayar', [], function ($locationProvider) {
  $locationProvider.hashPrefix('');
});

angular.module('senayar').controller('homeCtrl', ['$scope', 'githubService', function ($scope, githubService) {
  $scope.getGitInfo = function () {
    $scope.userNotFound = false;
    $scope.reposNotFound = false;
    githubService.checkIfUserExist($scope.username).then(function (data) {
      $scope.userInfo = data;
      githubService.getUserRepos($scope.username).then(function (data) {
        $scope.repos = data;
        $scope.reposFound = data.length > 0;
      }, (function (error) {
        $scope.reposNotFound = true;
      }));
    }, (function (error) {
      $scope.userNotFound = true;
    }));
  };

}]);

angular.module('senayar').service('twitterService', function () {

});

angular.module('senayar').service('githubService', ['$http', '$q', function ($http, $q) {
  this.checkIfUserExist = function (username) {
    var defer = $q.deferred();
    $http.get("https://api.github.com/users/" + username).success(function (data) {
      if (data.name == "") data.name = data.login;
      defer.resolve();
      return defer.promise(data);
    }).error(function () {
      defer.resolve();
      return false;
    });
  };

  this.getUserRepos = function (username) {
    var defer = $q.deferred();
    $http.get("https://api.github.com/users/" + username + "/repos").success(function (data) {
      defer.resolve();
      return defer.promise(data);
      $scope.reposFound = data.length > 0;
    }, function (error) {
      defer.resolve();
      return false;
    });
  };
}]);
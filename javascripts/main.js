angular.module('senayar', ['ngMaterial', 'ngAnimate'], function ($locationProvider) {
  $locationProvider.hashPrefix('');
});

angular.module('senayar').controller('homeCtrl', ['$scope', 'githubService', function ($scope, githubService) {
  $scope.username = 'senayar';
  $scope.getGitInfo = function () {
    $scope.userNotFound = false;
    $scope.reposNotFound = false;
    githubService.checkIfUserExist($scope.username).then(function (data) {
      if (data != null){
        $scope.loaded = true;
        $scope.userInfo = data;
      }
      else {
        $scope.userNotFound = true;
      }
      githubService.getUserRepos($scope.username).then(function (data) {
        if (data != null) {
          $scope.repos = data;
          console.log(data);
          $scope.reposFound = data.length > 0;
        }
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
    var defer = $q.defer();
    $http.get("https://api.github.com/users/" + username).success(function (data) {
      if (data.name == "") data.name = data.login;
      defer.resolve(data);
    }).error(function (error) {
      defer.reject(error);
      return false;
    });
    return defer.promise;
  };

  this.getUserRepos = function (username) {
    var defer = $q.defer();
    $http.get("https://api.github.com/users/" + username + "/repos").success(function (data) {
      defer.resolve(data);
    }, function (error) {
      defer.reject(error);
      return false;
    });
    return defer.promise;
  };
}]);
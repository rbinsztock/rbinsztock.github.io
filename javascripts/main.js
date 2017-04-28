angular.module('senayar', ['ngMaterial', 'ngAnimate'],  $locationProvider => {
  $locationProvider.hashPrefix('');
});

angular.module('senayar').controller('homeCtrl', ['$scope', 'githubService', ($scope, githubService) => {
  $scope.username = 'rbinsztock';
  $scope.getGitInfo = () => {
    $scope.userNotFound = false;
    $scope.reposNotFound = false;
    githubService.checkIfUserExist($scope.username)
      .then(data => {
        if (data != null){
          $scope.loaded = true;
          $scope.userInfo = data;
        }
        else {
          $scope.userNotFound = true;
        }
        githubService.getUserRepos($scope.username)
          .then(data => {
            if (data != null) {
              $scope.repos = data;
              $scope.reposFound = data.length > 0;
            }
          }, (error => {
            $scope.reposNotFound = true;
          }));
      }, (error => {
        $scope.userNotFound = true;
      }));
  };

}]);

angular.module('senayar').service('githubService', ['$http', '$q', ($http, $q) => {
  this.checkIfUserExist = username => {
    return $http.get("https://api.github.com/users/" + username);
  };

  this.getUserRepos =  username => {
    return $http.get("https://api.github.com/users/" + username + "/repos");
  };
}]);

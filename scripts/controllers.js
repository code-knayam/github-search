app.controller('searchUserController', function ($scope, GithubService) {

  $scope.onSubmit = function () {
    console.log($scope.userName);
    var userName = $scope.userName;
    GithubService.getUser(userName)
      .then(function (data) {
        console.log('[SearchUserController] ', data);
        
        showUserSearchResult(data);
      });
  } 

  function showUserSearchResult(data) {
    $scope.total_count = data.total_count;
    $scope.users = data.items;
    $('#userData').css('display', 'block');

  }
  
})
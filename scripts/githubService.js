app.factory('GithubService', function ($http, $log, $q) {

  _getUser = function (userName) {

    $log.info('[GithubService] User Name = ', userName);
    var userData$ = $q.defer();
    // API call
    $http({
      method: 'GET',
      url: 'https://api.github.com/search/users?q=' + userName + '&per_page=50'
    }).then(function (response) {
      $log.info('[GithubService] ', response);
      
      return userData$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] ', err);
      });
    
    return userData$.promise;
  }

  return {
    getUser: _getUser
  }

})
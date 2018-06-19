app.factory('GithubService', function ($http, $log, $q) {

  _getUserList = function (userName) {

    $log.info('[GithubService] User Name = ', userName);
    var userData$ = $q.defer();
    // API call
    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/search/users?q=' + userName + '&per_page=50'
    }).then(function (response) {
      $log.info('[GithubService] ', response);
      
      userData$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] ', err);
      userData$.reject(err);
      });
    
    return userData$.promise;
  }

  _getUserInfo = function (userName) {
    $log.info('[GithubService] Fetching Info for User = ', userName);

    var userDetails$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/users/' + userName
    }).then(function (response) {
      $log.info('[GithubService] ', response);
      userDetails$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] ', err);
      userDetails$.reject(err);
      });
    
    return userDetails$.promise;
  }

  _getUserRepos = function (userName) {
    $log.info('[GithubService] Fetching Repos for User = ', userName);

    var userRepos$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/users/' + userName + '/repos'
    }).then(function (response) {
      $log.info('[GithubService] ', response);
      userRepos$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] ', err);
      userRepos$.reject(err);
      });
    
    return userRepos$.promise;
  };

  return {
    getUserList: _getUserList,
    getUserInfo: _getUserInfo,
    getUserRepos: _getUserRepos
  }

})
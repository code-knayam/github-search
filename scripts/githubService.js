app.factory('GithubService', function ($http, $log, $q) {

  // API call to fetch User Search 
  _getUserList = function (userName) {
    $log.info('[GithubService] Searching for User Name = ', userName);

    var userData$ = $q.defer();
    
    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/search/users?q=' + userName + '&per_page=50'
    }).then(function (response) {
      $log.info('[GithubService] User Search API Response ', response);
      
      userData$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] User Search API Error ', err);
      userData$.reject(err);
      });
    
    return userData$.promise;
  }

  // API call to fetch User Info
  _getUserInfo = function (userName) {
    $log.info('[GithubService] Fetching Info for User = ', userName);

    var userDetails$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/users/' + userName
    }).then(function (response) {
      $log.info('[GithubService] User Info API Response', response);
      userDetails$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] User Info API Error ', err);
      userDetails$.reject(err);
      });
    
    return userDetails$.promise;
  }

  // API call to fetch User Repos
  _getUserRepos = function (userName) {
    $log.info('[GithubService] Fetching Repos for User = ', userName);

    var userRepos$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/users/' + userName + '/repos'
    }).then(function (response) {
      $log.info('[GithubService] User Repos API Response', response);
      userRepos$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService]  User Repos API Error ', err);
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
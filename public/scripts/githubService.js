app.factory('GithubService', function ($http, $log, $q) {

  // API call to fetch User Search 
  _getUserList = function (userName) {
    $log.info('[GithubService] Searching for User Name = ', userName);

    var userData$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/search/users?q=' + userName + '&per_page=50' + '?client_id=a8f668093078fab675d7&client_secret=6db1684b289e0979bb41a0a18f943f79dc192100'
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
      url: 'https://api.github.com/users/' + userName + '?client_id=a8f668093078fab675d7&client_secret=6db1684b289e0979bb41a0a18f943f79dc192100'
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
      url: 'https://api.github.com/users/' + userName + '/repos' + '?client_id=a8f668093078fab675d7&client_secret=6db1684b289e0979bb41a0a18f943f79dc192100'
    }).then(function (response) {
      $log.info('[GithubService] User Repos API Response', response);
      userRepos$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService]  User Repos API Error ', err);
      userRepos$.reject(err);
    });

    return userRepos$.promise;
  };

  // API call to fetch Contributors API response for a repo
  _getContributorsAPIResponse = function (userName, repoName) {
    $log.info('[GithubService] Fetching Contributors for User = ' + userName + ' Repo = ' + repoName);

    var contributors$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/repos/' + userName + '/' + repoName + '/stats/contributors' + '?client_id=a8f668093078fab675d7&client_secret=6db1684b289e0979bb41a0a18f943f79dc192100'
    }).then(function (response) {
      $log.info('[GithubService] Contributors API Response', response);
      contributors$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService]  Contributors API Error ', err);
      contributors$.reject(err);
    });

    return contributors$.promise;
  }

  _getCommitActivityAPIResponse = function (userName, repoName) {
    $log.info('[GithubService] Fetching Commit Activity for User = ' + userName + ' Repo = ' + repoName);

    var commitActivity$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/repos/' + userName + '/' + repoName + '/stats/commit_activity' + '?client_id=a8f668093078fab675d7&client_secret=6db1684b289e0979bb41a0a18f943f79dc192100'
    }).then(function (response) {
      $log.info('[GithubService] Commit Activity API Response', response);
      commitActivity$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] Commit Activity API Error ', err);
      usercommitActivityRepos$.reject(err);
    });

    return commitActivity$.promise;
  }

  _getWeeklyAdditionDeletionAPIResponse = function (userName, repoName) {
    $log.info('[GithubService] Fetching Weekly Addition Deletion for User = ' + userName + ' Repo = ' + repoName);

    var weeklyAddDel$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/repos/' + userName + '/' + repoName + '/stats/code_frequency' + '?client_id=a8f668093078fab675d7&client_secret=6db1684b289e0979bb41a0a18f943f79dc192100'
    }).then(function (response) {
      $log.info('[GithubService] Weekly Addition Deletion API Response', response);
      weeklyAddDel$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] Weekly Addition Deletion API Error ', err);
      weeklyAddDel$.reject(err);
    });

    return weeklyAddDel$.promise;
  }

  _getWeeklyCommitCountAPIResponse = function (userName, repoName) {
    $log.info('[GithubService] Fetching Weekly Commit Count for User = ' + userName + ' Repo = ' + repoName);

    var weeklyCommitCount$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/repos/' + userName + '/' + repoName + '/stats/participation' + '?client_id=a8f668093078fab675d7&client_secret=6db1684b289e0979bb41a0a18f943f79dc192100'
    }).then(function (response) {
      $log.info('[GithubService] Weekly Commit Count API Response', response);
      weeklyCommitCount$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] Weekly Commit Count API Error ', err);
      weeklyCommitCount$.reject(err);
    });

    return weeklyCommitCount$.promise;
  }

  _getHourlyCommitEachDayAPIResponse = function (userName, repoName) {
    $log.info('[GithubService] Fetching Hourly Commit Each Day for User = ' + userName + ' Repo = ' + repoName);

    var hourlyCommitEachDayCount$ = $q.defer();

    $http({
      method: 'GET',
      accept: 'application/vnd.github.v3+json',
      url: 'https://api.github.com/repos/' + userName + '/' + repoName + '/stats/punch_card' + '?client_id=a8f668093078fab675d7&client_secret=6db1684b289e0979bb41a0a18f943f79dc192100'
    }).then(function (response) {
      $log.info('[GithubService] Hourly Commit Each Day API Response', response);
      hourlyCommitEachDayCount$.resolve(response.data);
    }, function (err) {
      $log.error('[GithubService] Hourly Commit Each Day API Error ', err);
      hourlyCommitEachDayCount$.reject(err);
    });

    return hourlyCommitEachDayCount$.promise;
  }

  return {
    getUserList: _getUserList,
    getUserInfo: _getUserInfo,
    getUserRepos: _getUserRepos,
    getContributorsAPIResponse: _getContributorsAPIResponse,
    getCommitActivityAPIResponse: _getCommitActivityAPIResponse,
    getWeeklyAdditionDeletionAPIResponse: _getWeeklyAdditionDeletionAPIResponse,
    getWeeklyCommitCountAPIResponse: _getWeeklyCommitCountAPIResponse,
    getHourlyCommitEachDayAPIResponse: _getHourlyCommitEachDayAPIResponse
  }

});
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
    
    // userDetails$.resolve(userDetailsStubResponse);

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

    // userRepos$.resolve(userReposStubResponse);
    
    return userRepos$.promise;
  };

  // API call to fetch Contributors API response for a repo
  _getContributorsAPIResponse = function (userName, repoName) {
    $log.info('[GithubService] Fetching Contributors for User = '+ userName + ' Repo = ' + repoName);

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

    // contributors$.resolve(userContributorStubResponse);
    
    return contributors$.promise;
  }

  _getCommitActivityAPIResponse = function (userName, repoName) {
    $log.info('[GithubService] Fetching Commit Activity for User = '+ userName + ' Repo = ' + repoName);

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

    // commitActivity$.resolve(commitActivityStubResponse);
    
    return commitActivity$.promise;
  }

  return {
    getUserList: _getUserList,
    getUserInfo: _getUserInfo,
    getUserRepos: _getUserRepos,
    getContributorsAPIResponse: _getContributorsAPIResponse,
    getCommitActivityAPIResponse:
    _getCommitActivityAPIResponse
  }

});

var userDetailsStubResponse = {
  "login": "CypherTree",
  "id": 11984395,
  "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
  "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/CypherTree",
  "html_url": "https://github.com/CypherTree",
  "followers_url": "https://api.github.com/users/CypherTree/followers",
  "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
  "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
  "organizations_url": "https://api.github.com/users/CypherTree/orgs",
  "repos_url": "https://api.github.com/users/CypherTree/repos",
  "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
  "received_events_url": "https://api.github.com/users/CypherTree/received_events",
  "type": "Organization",
  "site_admin": false,
  "name": "Cyphertree Technologies",
  "company": null,
  "blog": "http://www.cyphertree.com",
  "location": "Pune, India",
  "email": "maddy9859@gmail.com",
  "hireable": null,
  "bio": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2015-04-16T20:12:41Z",
  "updated_at": "2017-12-02T10:38:42Z"
};

var userReposStubResponse = [
  {
    "id": 67423951,
    "node_id": "MDEwOlJlcG9zaXRvcnk2NzQyMzk1MQ==",
    "name": "android-components",
    "full_name": "CypherTree/android-components",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/android-components",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/android-components",
    "forks_url": "https://api.github.com/repos/CypherTree/android-components/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/android-components/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/android-components/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/android-components/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/android-components/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/android-components/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/android-components/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/android-components/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/android-components/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/android-components/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/android-components/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/android-components/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/android-components/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/android-components/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/android-components/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/android-components/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/android-components/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/android-components/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/android-components/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/android-components/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/android-components/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/android-components/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/android-components/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/android-components/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/android-components/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/android-components/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/android-components/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/android-components/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/android-components/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/android-components/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/android-components/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/android-components/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/android-components/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/android-components/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/android-components/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/android-components/deployments",
    "created_at": "2016-09-05T13:37:22Z",
    "updated_at": "2017-07-08T19:21:37Z",
    "pushed_at": "2017-07-14T10:42:33Z",
    "git_url": "git://github.com/CypherTree/android-components.git",
    "ssh_url": "git@github.com:CypherTree/android-components.git",
    "clone_url": "https://github.com/CypherTree/android-components.git",
    "svn_url": "https://github.com/CypherTree/android-components",
    "homepage": null,
    "size": 3204,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  {
    "id": 45759727,
    "node_id": "MDEwOlJlcG9zaXRvcnk0NTc1OTcyNw==",
    "name": "angular-enterprise-boilerplate",
    "full_name": "CypherTree/angular-enterprise-boilerplate",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/angular-enterprise-boilerplate",
    "description": "A boilerplate/starter for any AngularJS 1 project. This boilerplate is equipped with Angular1.6, Componentized Architecture, LESS, Test Cases and super gulp configuration which takes care of minifying and putting it on S3 as well as wercker configuration to make sure your code passes test cases before you merge. One True Starter Code for any Angular 1 project.",
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate",
    "forks_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/angular-enterprise-boilerplate/deployments",
    "created_at": "2015-11-07T23:50:26Z",
    "updated_at": "2018-02-27T12:34:54Z",
    "pushed_at": "2017-11-16T07:53:37Z",
    "git_url": "git://github.com/CypherTree/angular-enterprise-boilerplate.git",
    "ssh_url": "git@github.com:CypherTree/angular-enterprise-boilerplate.git",
    "clone_url": "https://github.com/CypherTree/angular-enterprise-boilerplate.git",
    "svn_url": "https://github.com/CypherTree/angular-enterprise-boilerplate",
    "homepage": "",
    "size": 8528,
    "stargazers_count": 2,
    "watchers_count": 2,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 2,
    "default_branch": "master"
  },
  {
    "id": 89704919,
    "node_id": "MDEwOlJlcG9zaXRvcnk4OTcwNDkxOQ==",
    "name": "angular4-boilerplate",
    "full_name": "CypherTree/angular4-boilerplate",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/angular4-boilerplate",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/angular4-boilerplate",
    "forks_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/angular4-boilerplate/deployments",
    "created_at": "2017-04-28T12:40:27Z",
    "updated_at": "2018-01-28T11:04:18Z",
    "pushed_at": "2017-08-24T18:44:29Z",
    "git_url": "git://github.com/CypherTree/angular4-boilerplate.git",
    "ssh_url": "git@github.com:CypherTree/angular4-boilerplate.git",
    "clone_url": "https://github.com/CypherTree/angular4-boilerplate.git",
    "svn_url": "https://github.com/CypherTree/angular4-boilerplate",
    "homepage": null,
    "size": 60,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "TypeScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master"
  },
  {
    "id": 137466165,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMzc0NjYxNjU=",
    "name": "angular6-boilerplate",
    "full_name": "CypherTree/angular6-boilerplate",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/angular6-boilerplate",
    "description": "Progressive WebApp POC / Boilerplate",
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/angular6-boilerplate",
    "forks_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/angular6-boilerplate/deployments",
    "created_at": "2018-06-15T09:06:57Z",
    "updated_at": "2018-06-15T09:06:59Z",
    "pushed_at": "2018-06-15T09:06:58Z",
    "git_url": "git://github.com/CypherTree/angular6-boilerplate.git",
    "ssh_url": "git@github.com:CypherTree/angular6-boilerplate.git",
    "clone_url": "https://github.com/CypherTree/angular6-boilerplate.git",
    "svn_url": "https://github.com/CypherTree/angular6-boilerplate",
    "homepage": null,
    "size": 1,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  {
    "id": 85610647,
    "node_id": "MDEwOlJlcG9zaXRvcnk4NTYxMDY0Nw==",
    "name": "go-webapp",
    "full_name": "CypherTree/go-webapp",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/go-webapp",
    "description": "A sample Webapp with FB and Instagram login along with JWT authentication, Redis and MongoDB.",
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/go-webapp",
    "forks_url": "https://api.github.com/repos/CypherTree/go-webapp/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/go-webapp/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/go-webapp/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/go-webapp/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/go-webapp/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/go-webapp/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/go-webapp/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/go-webapp/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/go-webapp/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/go-webapp/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/go-webapp/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/go-webapp/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/go-webapp/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/go-webapp/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/go-webapp/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/go-webapp/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/go-webapp/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/go-webapp/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/go-webapp/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/go-webapp/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/go-webapp/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/go-webapp/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/go-webapp/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/go-webapp/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/go-webapp/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/go-webapp/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/go-webapp/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/go-webapp/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/go-webapp/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/go-webapp/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/go-webapp/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/go-webapp/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/go-webapp/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/go-webapp/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/go-webapp/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/go-webapp/deployments",
    "created_at": "2017-03-20T18:14:59Z",
    "updated_at": "2017-06-07T19:37:41Z",
    "pushed_at": "2017-06-10T21:47:52Z",
    "git_url": "git://github.com/CypherTree/go-webapp.git",
    "ssh_url": "git@github.com:CypherTree/go-webapp.git",
    "clone_url": "https://github.com/CypherTree/go-webapp.git",
    "svn_url": "https://github.com/CypherTree/go-webapp",
    "homepage": null,
    "size": 3065,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "Go",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master"
  },
  {
    "id": 46722150,
    "node_id": "MDEwOlJlcG9zaXRvcnk0NjcyMjE1MA==",
    "name": "ios-components",
    "full_name": "CypherTree/ios-components",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/ios-components",
    "description": "iOS components",
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/ios-components",
    "forks_url": "https://api.github.com/repos/CypherTree/ios-components/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/ios-components/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/ios-components/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/ios-components/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/ios-components/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/ios-components/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/ios-components/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/ios-components/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/ios-components/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/ios-components/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/ios-components/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/ios-components/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/ios-components/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/ios-components/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/ios-components/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/ios-components/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/ios-components/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/ios-components/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/ios-components/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/ios-components/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/ios-components/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/ios-components/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/ios-components/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/ios-components/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/ios-components/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/ios-components/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/ios-components/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/ios-components/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/ios-components/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/ios-components/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/ios-components/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/ios-components/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/ios-components/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/ios-components/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/ios-components/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/ios-components/deployments",
    "created_at": "2015-11-23T13:32:11Z",
    "updated_at": "2017-03-09T10:55:04Z",
    "pushed_at": "2017-03-09T10:55:01Z",
    "git_url": "git://github.com/CypherTree/ios-components.git",
    "ssh_url": "git@github.com:CypherTree/ios-components.git",
    "clone_url": "https://github.com/CypherTree/ios-components.git",
    "svn_url": "https://github.com/CypherTree/ios-components",
    "homepage": null,
    "size": 56,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Objective-C",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  {
    "id": 44457940,
    "node_id": "MDEwOlJlcG9zaXRvcnk0NDQ1Nzk0MA==",
    "name": "karn-client",
    "full_name": "CypherTree/karn-client",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/karn-client",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/karn-client",
    "forks_url": "https://api.github.com/repos/CypherTree/karn-client/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/karn-client/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/karn-client/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/karn-client/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/karn-client/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/karn-client/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/karn-client/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/karn-client/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/karn-client/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/karn-client/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/karn-client/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/karn-client/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/karn-client/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/karn-client/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/karn-client/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/karn-client/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/karn-client/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/karn-client/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/karn-client/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/karn-client/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/karn-client/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/karn-client/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/karn-client/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/karn-client/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/karn-client/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/karn-client/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/karn-client/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/karn-client/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/karn-client/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/karn-client/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/karn-client/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/karn-client/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/karn-client/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/karn-client/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/karn-client/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/karn-client/deployments",
    "created_at": "2015-10-17T23:06:52Z",
    "updated_at": "2016-06-20T07:47:28Z",
    "pushed_at": "2015-10-17T23:12:17Z",
    "git_url": "git://github.com/CypherTree/karn-client.git",
    "ssh_url": "git@github.com:CypherTree/karn-client.git",
    "clone_url": "https://github.com/CypherTree/karn-client.git",
    "svn_url": "https://github.com/CypherTree/karn-client",
    "homepage": null,
    "size": 6920,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master"
  },
  {
    "id": 44457888,
    "node_id": "MDEwOlJlcG9zaXRvcnk0NDQ1Nzg4OA==",
    "name": "karn-server",
    "full_name": "CypherTree/karn-server",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/karn-server",
    "description": null,
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/karn-server",
    "forks_url": "https://api.github.com/repos/CypherTree/karn-server/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/karn-server/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/karn-server/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/karn-server/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/karn-server/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/karn-server/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/karn-server/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/karn-server/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/karn-server/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/karn-server/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/karn-server/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/karn-server/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/karn-server/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/karn-server/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/karn-server/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/karn-server/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/karn-server/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/karn-server/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/karn-server/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/karn-server/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/karn-server/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/karn-server/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/karn-server/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/karn-server/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/karn-server/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/karn-server/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/karn-server/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/karn-server/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/karn-server/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/karn-server/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/karn-server/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/karn-server/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/karn-server/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/karn-server/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/karn-server/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/karn-server/deployments",
    "created_at": "2015-10-17T23:04:29Z",
    "updated_at": "2016-06-20T07:47:21Z",
    "pushed_at": "2015-10-17T23:10:32Z",
    "git_url": "git://github.com/CypherTree/karn-server.git",
    "ssh_url": "git@github.com:CypherTree/karn-server.git",
    "clone_url": "https://github.com/CypherTree/karn-server.git",
    "svn_url": "https://github.com/CypherTree/karn-server",
    "homepage": null,
    "size": 300,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "master"
  },
  {
    "id": 38568727,
    "node_id": "MDEwOlJlcG9zaXRvcnkzODU2ODcyNw==",
    "name": "node-express-mongoose-demo",
    "full_name": "CypherTree/node-express-mongoose-demo",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/node-express-mongoose-demo",
    "description": "A simple demo app in node.js using express, mongoose, passport.js for beginners",
    "fork": true,
    "url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo",
    "forks_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/node-express-mongoose-demo/deployments",
    "created_at": "2015-07-05T12:45:33Z",
    "updated_at": "2015-07-05T12:45:34Z",
    "pushed_at": "2015-05-22T20:08:04Z",
    "git_url": "git://github.com/CypherTree/node-express-mongoose-demo.git",
    "ssh_url": "git@github.com:CypherTree/node-express-mongoose-demo.git",
    "clone_url": "https://github.com/CypherTree/node-express-mongoose-demo.git",
    "svn_url": "https://github.com/CypherTree/node-express-mongoose-demo",
    "homepage": "http://nodejs-express-demo.herokuapp.com/",
    "size": 1599,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "JavaScript",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  {
    "id": 44956327,
    "node_id": "MDEwOlJlcG9zaXRvcnk0NDk1NjMyNw==",
    "name": "traider.io",
    "full_name": "CypherTree/traider.io",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/traider.io",
    "description": "traider.io",
    "fork": true,
    "url": "https://api.github.com/repos/CypherTree/traider.io",
    "forks_url": "https://api.github.com/repos/CypherTree/traider.io/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/traider.io/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/traider.io/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/traider.io/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/traider.io/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/traider.io/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/traider.io/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/traider.io/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/traider.io/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/traider.io/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/traider.io/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/traider.io/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/traider.io/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/traider.io/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/traider.io/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/traider.io/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/traider.io/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/traider.io/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/traider.io/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/traider.io/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/traider.io/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/traider.io/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/traider.io/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/traider.io/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/traider.io/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/traider.io/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/traider.io/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/traider.io/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/traider.io/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/traider.io/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/traider.io/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/traider.io/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/traider.io/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/traider.io/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/traider.io/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/traider.io/deployments",
    "created_at": "2015-10-26T08:48:22Z",
    "updated_at": "2015-10-26T08:48:22Z",
    "pushed_at": "2015-10-08T15:06:35Z",
    "git_url": "git://github.com/CypherTree/traider.io.git",
    "ssh_url": "git@github.com:CypherTree/traider.io.git",
    "clone_url": "https://github.com/CypherTree/traider.io.git",
    "svn_url": "https://github.com/CypherTree/traider.io",
    "homepage": "http://traider.io",
    "size": 1017,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "HTML",
    "has_issues": false,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": {
      "key": "gpl-3.0",
      "name": "GNU General Public License v3.0",
      "spdx_id": "GPL-3.0",
      "url": "https://api.github.com/licenses/gpl-3.0",
      "node_id": "MDc6TGljZW5zZTk="
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  {
    "id": 137466004,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMzc0NjYwMDQ=",
    "name": "vuejs-pwa-poc",
    "full_name": "CypherTree/vuejs-pwa-poc",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/vuejs-pwa-poc",
    "description": "Progressive WebApp POC / Boilerplate",
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc",
    "forks_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/vuejs-pwa-poc/deployments",
    "created_at": "2018-06-15T09:05:29Z",
    "updated_at": "2018-06-18T12:10:07Z",
    "pushed_at": "2018-06-18T12:10:05Z",
    "git_url": "git://github.com/CypherTree/vuejs-pwa-poc.git",
    "ssh_url": "git@github.com:CypherTree/vuejs-pwa-poc.git",
    "clone_url": "https://github.com/CypherTree/vuejs-pwa-poc.git",
    "svn_url": "https://github.com/CypherTree/vuejs-pwa-poc",
    "homepage": null,
    "size": 178,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "Vue",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },
  {
    "id": 137466097,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMzc0NjYwOTc=",
    "name": "wordpress-angular-poc",
    "full_name": "CypherTree/wordpress-angular-poc",
    "owner": {
      "login": "CypherTree",
      "id": 11984395,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjExOTg0Mzk1",
      "avatar_url": "https://avatars2.githubusercontent.com/u/11984395?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/CypherTree",
      "html_url": "https://github.com/CypherTree",
      "followers_url": "https://api.github.com/users/CypherTree/followers",
      "following_url": "https://api.github.com/users/CypherTree/following{/other_user}",
      "gists_url": "https://api.github.com/users/CypherTree/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/CypherTree/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/CypherTree/subscriptions",
      "organizations_url": "https://api.github.com/users/CypherTree/orgs",
      "repos_url": "https://api.github.com/users/CypherTree/repos",
      "events_url": "https://api.github.com/users/CypherTree/events{/privacy}",
      "received_events_url": "https://api.github.com/users/CypherTree/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/CypherTree/wordpress-angular-poc",
    "description": "Progressive WebApp POC / Boilerplate",
    "fork": false,
    "url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc",
    "forks_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/forks",
    "keys_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/teams",
    "hooks_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/hooks",
    "issue_events_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/issues/events{/number}",
    "events_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/events",
    "assignees_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/assignees{/user}",
    "branches_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/branches{/branch}",
    "tags_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/tags",
    "blobs_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/languages",
    "stargazers_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/stargazers",
    "contributors_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/contributors",
    "subscribers_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/subscribers",
    "subscription_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/subscription",
    "commits_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/contents/{+path}",
    "compare_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/merges",
    "archive_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/downloads",
    "issues_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/issues{/number}",
    "pulls_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/labels{/name}",
    "releases_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/releases{/id}",
    "deployments_url": "https://api.github.com/repos/CypherTree/wordpress-angular-poc/deployments",
    "created_at": "2018-06-15T09:06:24Z",
    "updated_at": "2018-06-18T12:38:20Z",
    "pushed_at": "2018-06-18T12:38:19Z",
    "git_url": "git://github.com/CypherTree/wordpress-angular-poc.git",
    "ssh_url": "git@github.com:CypherTree/wordpress-angular-poc.git",
    "clone_url": "https://github.com/CypherTree/wordpress-angular-poc.git",
    "svn_url": "https://github.com/CypherTree/wordpress-angular-poc",
    "homepage": null,
    "size": 28,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "HTML",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "open_issues_count": 0,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": null,
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  }
];

var commitActivityStubResponse = [
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1498348800
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1498953600
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1499558400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1500163200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1500768000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1501372800
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1501977600
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1502582400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1503187200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1503792000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1504396800
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1505001600
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1505606400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1506211200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1506816000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1507420800
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1508025600
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1508630400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1509235200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1509840000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1510448400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1511053200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1511658000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1512262800
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1512867600
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1513472400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1514077200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1514682000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1515286800
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1515891600
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1516496400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1517101200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1517706000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1518310800
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1518915600
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1519520400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1520125200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1520730000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1521331200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1521936000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1522540800
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1523145600
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1523750400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1524355200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1524960000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1525564800
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1526169600
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1526774400
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1527379200
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 0,
    "week": 1527984000
  },
  {
    "days": [
      0,
      0,
      0,
      0,
      0,
      1,
      0
    ],
    "total": 1,
    "week": 1528588800
  },
  {
    "days": [
      0,
      1,
      0,
      0,
      0,
      0,
      0
    ],
    "total": 1,
    "week": 1529193600
  }
];

var userContributorStubResponse = [
  {
    "total": 1,
    "weeks": [
      {
        "w": 1528588800,
        "a": 0,
        "d": 0,
        "c": 0
      },
      {
        "w": 1529193600,
        "a": 3397,
        "d": 7,
        "c": 1
      }
    ],
    "author": {
      "login": "harshalc",
      "id": 4576620,
      "node_id": "MDQ6VXNlcjQ1NzY2MjA=",
      "avatar_url": "https://avatars2.githubusercontent.com/u/4576620?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/harshalc",
      "html_url": "https://github.com/harshalc",
      "followers_url": "https://api.github.com/users/harshalc/followers",
      "following_url": "https://api.github.com/users/harshalc/following{/other_user}",
      "gists_url": "https://api.github.com/users/harshalc/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/harshalc/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/harshalc/subscriptions",
      "organizations_url": "https://api.github.com/users/harshalc/orgs",
      "repos_url": "https://api.github.com/users/harshalc/repos",
      "events_url": "https://api.github.com/users/harshalc/events{/privacy}",
      "received_events_url": "https://api.github.com/users/harshalc/received_events",
      "type": "User",
      "site_admin": false
    }
  },
  {
    "total": 1,
    "weeks": [
      {
        "w": 1528588800,
        "a": 23,
        "d": 0,
        "c": 1
      },
      {
        "w": 1529193600,
        "a": 0,
        "d": 0,
        "c": 0
      }
    ],
    "author": {
      "login": "anit",
      "id": 1629898,
      "node_id": "MDQ6VXNlcjE2Mjk4OTg=",
      "avatar_url": "https://avatars3.githubusercontent.com/u/1629898?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/anit",
      "html_url": "https://github.com/anit",
      "followers_url": "https://api.github.com/users/anit/followers",
      "following_url": "https://api.github.com/users/anit/following{/other_user}",
      "gists_url": "https://api.github.com/users/anit/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/anit/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/anit/subscriptions",
      "organizations_url": "https://api.github.com/users/anit/orgs",
      "repos_url": "https://api.github.com/users/anit/repos",
      "events_url": "https://api.github.com/users/anit/events{/privacy}",
      "received_events_url": "https://api.github.com/users/anit/received_events",
      "type": "User",
      "site_admin": false
    }
  }
];
// Controller for Search Page
app.controller('searchUserController', function ($scope, $log, $location, GithubService) {

  // When Search Button Clicked
  $scope.onSubmit = function () {

    // showing spinner indicating start of search
    $scope.showSpinner = true;
    
    $log.info('[searchUserController] Searching for User Name = ', $scope.userName);

    var userName = $scope.userName;

    // Fetching User search results
    GithubService.getUserList(userName)
      .then(function (data) {
        $log.info('[searchUserController] User Names Search Response from Service', data);
        // Fading In search result DIV to show results
        $('.search-result').fadeIn(100);
        showUserSearchResult(data);
      }, function (err) {
        $log.error('[searchUserController] User Names Seach Error from Service', err);
      });
  }
  
  // When View Details Button Clicked
  $scope.onViewDetails = function (userName) {
    $log.info('[searchUserController] Navigating to Details Page for User Name = ', userName);
    // Scrolling page to Top
    $('html, body').animate({ scrollTop: 0 }, 10);
    // Navigating to Details Page
    $location.path('details/' + userName);
  }

  // Show User Search Results
  function showUserSearchResult(data) {
    $scope.total_count = data.total_count;

    // When no search results found
    if ($scope.total_count === 0) {
      $scope.showNotFoundMessage = true;
      $scope.users = null;
    } else {
      // when users found
      // showing extra info when search result greater than 50
      if ($scope.total_count > 50) {
        $scope.showExtraInfo = true;
      } else {
        $scope.showExtraInfo = false;
      }
      $scope.showNotFoundMessage = false;
      $scope.users = data.items;
    }
    // Hiding Spinner depicting results fetched
    $scope.showSpinner = false;
    scrollResultToTop();
  }

  // Scrolling Search Result DIV to top
  function scrollResultToTop() {
    var top = $('.search-result').offset().top - 50;
    window.setTimeout(function () {
      $('html, body').animate({ scrollTop: top }, 1000);
    }, 200);
  }
  
});

// Controller for User Details Page
app.controller('userDetailController', function ($scope, $routeParams, $log, GithubService) {
  
  // Getting UserName form RouteParams
  $scope.userName = $routeParams.userName;
  
  // Calling Service method to fetch User Info
  GithubService.getUserInfo($scope.userName)
    .then(function (userDetails) {
      $log.info('[userDetailController] User Info Fetch Response from Service', userDetails);
      $scope.userDetails = userDetails;
    }, function (err) {
      $log.error('[userDetailController] User Info Fetch Error from Service', err);
    });

  // Calling Service method to fetch User Repos
  GithubService.getUserRepos($scope.userName)
    .then(function (repoData) {
      $log.info('[userDetailController] Repo Data Fetch Response from Service', repoData);
      $scope.userRepos = repoData;
    }, function (err) {
      $log.error('[userDetailController] Repo Data Fetch Error from Service', err);
    });
  
});

// Controller for Repository Details
app.controller('repoDetailController', function ($scope) {   

  // Show API chart function based on index passed from DOM
  $scope.showApiChart = function (index) {
    // Hiding all visible charts
    $('.chart-info').css('display', 'none');
    // Showing the nth index chart
    $('.chart-info:nth-child(' + index + ')').fadeIn(500);
  }

  // showing default chart on DOM load
  $scope.showApiChart(1);
  
})
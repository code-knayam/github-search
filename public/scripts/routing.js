app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
    templateUrl: '../partials/landing.html'
    })
    .when('/details/:userName', {
    templateUrl: '../partials/user-details.html'
    })
    .otherwise({     
      templateUrl: '../partials/404.html'
  });
});
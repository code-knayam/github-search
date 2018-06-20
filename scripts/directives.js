app.directive('repoDetialsDirective', function () {
  return {
    restrict: 'E',
    scope: {
      repo : '=',
      repoIndex : '@'
    },
    templateUrl: '../partials/repo-details.html'
  };
});
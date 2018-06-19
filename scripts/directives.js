app.directive('repoDetialsDirective', function () {
  return {
    restrict: 'A',
    scope: {
      repo: '='
    },
    templateUrl: '../partials/repo-details.html',
    link: function ($scope, $elem, $attr) {
      
    }
  };
});
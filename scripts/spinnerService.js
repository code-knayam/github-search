app.factory('SpinnerService', function () {
  
  _showSpinner = function () {
    // $scope.showSpinner = true;
  }

  _hideSpinner = function () {
    // $scope.showSpinner = false;    
  }

  return {
    showSpinner: _showSpinner,
    hideSpinner: _hideSpinner
  }

})
app.controller('contributorListChartController', function ($scope, $log, GithubService, ChartingService) {

  var apiResponse;

  // Calling service function to get API response
  GithubService.getContributorsAPIResponse($scope.repo.owner.login, $scope.repo.name)
    .then(function (response) {
      $log.info('[contributorListChartController] Contributors API Response for ' + $scope.repo.owner.login + ' ' + $scope.repo.name + ' from Service', response);
      apiResponse = response;
      // calling function to Initialize chart
      initChart();
    }, function (err) {
      $log.error('[contributorListChartController] Contributors API Error from Service', err);
    });

  function initChart() {
    // Load Charts and the corechart package.
    google.charts.load('current', {
      'packages': ['corechart']
    });
    // Draw the chart when Charts is loaded.
    google.charts.setOnLoadCallback(drawChart);
  }

  function drawChart() {
    // Operating on response from API
    var response = ChartingService.operateContributorListResponse(apiResponse);
    // Configuring chart
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Contributor');
    data.addColumn('number', 'Total Commits');
    data.addColumn({
      'type': 'string',
      'role': 'tooltip',
      'p': {
        'html': true
      }
    });
    data.addRows(response);

    // setting options for chart
    var options = {
      title: 'Contributor List',
      is3D: true,
      width: 800,
      height: 400,
      tooltip: {
        isHtml: true
      }
    };
    // Drawing chart
    var chart = new google.visualization.PieChart(document.querySelector('#contributor-list-chart_' + $scope.repoIndex));
    chart.draw(data, options);
  }

});

app.controller('commitActivityChartController', function ($scope, $log, GithubService, ChartingService) {

  var apiResponse;

  // Calling service function to get API response
  GithubService.getCommitActivityAPIResponse($scope.repo.owner.login, $scope.repo.name)
    .then(function (response) {
      $log.info('[commitActivityChartController] Commit Activity API Response for ' + $scope.repo.owner.login + ' ' + $scope.repo.name + ' from Service', response);
      apiResponse = response;
      // calling function to Initialize chart
      initChart();
    }, function (err) {
      $log.error('[commitActivityChartController] Commit Activity API Error from Service', err);
    });

  function initChart() {
    // Load Charts and the corechart package.
    google.charts.load('current', {
      'packages': ['corechart']
    });
    // Draw the chart when Charts is loaded.
    google.charts.setOnLoadCallback(drawChart);
  }

  function drawChart() {
    // Operating on response from API
    var response = ChartingService.operateCommitActivityResponse(apiResponse);
    // Configuring chart
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Day');
    data.addColumn('number', 'Total Commits');
    data.addRows(response);

    // Setting options for chart
    var options = {
      pieHole: 0.2,
      width: 800,
      height: 400,
      sliceVisibilityThreshold: 0
    };
    // Drawing chart
    var chart = new google.visualization.PieChart(document.querySelector('#commit-activity-chart_' + $scope.repoIndex));
    chart.draw(data, options);
  }

});

app.controller('weeklyAdditionDeletionChartController', function ($scope, $log, GithubService, ChartingService) {

  var apiResponse;

  // Calling service function to get API response
  GithubService.getWeeklyAdditionDeletionAPIResponse($scope.repo.owner.login, $scope.repo.name)
    .then(function (response) {
      $log.info('[weeklyAdditionDeletionChartController] Weekly Addition Deletion API Response for ' + $scope.repo.owner.login + ' ' + $scope.repo.name + ' from Service', response);
      apiResponse = response;
      // calling function to Initialize chart
      initChart();
    }, function (err) {
      $log.error('[weeklyAdditionDeletionChartController] Weekly Addition Deletion API Error from Service', err);
    });

  function initChart() {
    // Load Charts and the corechart package.
    google.charts.load('current', {
      'packages': ['corechart', 'bar']
    });
    // Draw the chart when Charts is loaded.
    google.charts.setOnLoadCallback(drawChart);
  }

  function drawChart() {
    // Operating on response from API
    var response = ChartingService.operateWeeklyAddDelResponse(apiResponse);
    // Configuring chart
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Week');
    data.addColumn('number', 'Add');
    data.addColumn('number', 'Del');
    data.addRows(response);

    // Setting options for chart
    var options = {
      series: {
        0: {
          targetAxisIndex: 0
        },
        1: {
          targetAxisIndex: 1
        }
      },
      title: 'Weekly addition and deletion',
      width: 800,
      height: 400,
      vAxes: {
        // Adds titles to each axis.
        0: {
          title: 'Addition'
        },
        1: {
          title: 'Deletion'
        }
      },
      hAxes: {
        0: {
          title: 'Week with'
        }
      }
    };
    // Drawing Chart
    var chart = new google.visualization.LineChart(document.querySelector('#weekly-addition-deletion-chart_' + $scope.repoIndex));
    chart.draw(data, options);
  }

});

app.controller('weeklyCommitCountChartController', function ($scope, $log, GithubService, ChartingService) {

  var apiResponse;

  // Calling service function to get API response
  GithubService.getWeeklyCommitCountAPIResponse($scope.repo.owner.login, $scope.repo.name)
    .then(function (response) {
      $log.info('[weeklyCommitCountChartController] Weekly Commit Count API Response for ' + $scope.repo.owner.login + ' ' + $scope.repo.name + ' from Service', response);
      apiResponse = response;
      // calling function to Initialize chart
      initChart();
    }, function (err) {
      $log.error('[weeklyCommitCountChartController] Weekly Commit Count API Error from Service', err);
    });

  function initChart() {
    // Load Charts and the corechart package.
    google.charts.load('current', {
      'packages': ['corechart']
    });
    // Draw the chart when Charts is loaded.
    google.charts.setOnLoadCallback(drawChart);
  }

  function drawChart() {
    var response = ChartingService.operateWeeklyCommitCountResponse(apiResponse);    
    // configuring chart
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Week');
    data.addColumn('number', 'All');
    data.addColumn('number', 'Owner');
    data.addRows(response);

    var options = {
      series: {
        0: {
          targetAxisIndex: 0
        },
        1: {
          targetAxisIndex: 1
        }
      },
      title: 'Weekly Commit Count',
      width: 800,
      height: 400,
      vAxes: {
        // Adds titles to each axis.
        0: {
          title: 'All'
        },
        1: {
          title: 'owner'
        }
      },
      hAxes: {
        0: {
          title: 'Week'
        }
      }
    };

    var chart = new google.visualization.LineChart(document.querySelector('#weekly-commit-count-chart_' + $scope.repoIndex));
    chart.draw(data, options);
  }

});

app.controller('hourlyCommitChartController', function ($scope, $log, GithubService, ChartingService) {

  var apiResponse;

  // Calling service function to get API response
  GithubService.getHourlyCommitEachDayAPIResponse($scope.repo.owner.login, $scope.repo.name)
    .then(function (response) {
      $log.info('[hourlyCommitChartController] Hourly Commit Each Day API Response for ' + $scope.repo.owner.login + ' ' + $scope.repo.name + ' from Service', response);
      apiResponse = response;
      // calling function to Initialize chart
      initChart();
    }, function (err) {
      $log.error('[hourlyCommitChartController] Hourly Commit Each Day API Error from Service', err);
    });

  function initChart() {
    // Load Charts and the corechart package.
    google.charts.load('current', {
      'packages': ['corechart']
    });
    // Draw the chart when Charts is loaded.
    google.charts.setOnLoadCallback(drawChart);
  }

  function drawChart() {
    // Operating on response from API
    var response = ChartingService.operateHourlyCommitEachDayResponse(apiResponse);
    // Configuring chart    
    var data = google.visualization.arrayToDataTable([
      ['Hours', '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM', '11:00 PM'],
      ...response
    ]);

    var options = {
      title: 'Number of Commits per hour in each day of week',
      legend: {
        position: 'top'
      },
      bar: {
        groupWidth: '50%'
      },
      width: 800,
      height: 400,
      isStacked: true,
      legend: false,
      vAxes: {
        // Adds titles to each axis.
        0: {
          title: 'Day'
        }
      },
      hAxes: {
        0: {
          title: 'Commit Count'
        }
      }
    };

    var chart = new google.visualization.BarChart(document.querySelector('#hourly-commit-chart_' + $scope.repoIndex));
    chart.draw(data, options);
  }

});
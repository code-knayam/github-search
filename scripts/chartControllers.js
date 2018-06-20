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
      $log.erro('[contributorListChartController] Contributors API Error from Service', response);
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
      $log.erro('[commitActivityChartController] Commit Activity API Error from Service', response);
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

app.controller('weeklyAdditionDeletionChartController', function ($scope) {

  // Load Charts and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart', 'bar']
  });

  // Draw the pie chart for Contributor List when Charts is loaded.
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Week', 'Add ', 'Del '],
      ['10th June', 1540, 3],
      ['11th June', 1170, 12],
      ['12th June', 1540, 149],
      ['13th June', 1540, 149],
      ['14th June', 1540, 149],
      ['15th June', 1030, 39]
    ]);


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
      }
    };


    var chart = new google.visualization.ColumnChart(document.querySelector('#weekly-addition-deletion-chart_' + $scope.repoIndex));
    chart.draw(data, options);
  }

});

app.controller('weeklyCommitCountChartController', function ($scope) {

  // Load Charts and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart']
  });

  // Draw the pie chart for Contributor List when Charts is loaded.
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Week', 'All', 'Owner'],
      ['1', 0, 0],
      ['2', 3, 1],
      ['3', 3, 3],
      ['4', 0, 0]
    ]);

    var options = {
      title: 'weekly commit count for the repository',
      curveType: 'function',
      width: 800,
      height: 400,
      legend: {
        position: 'bottom'
      }
    };

    var chart = new google.visualization.LineChart(document.querySelector('#weekly-commit-count-chart_' + $scope.repoIndex));
    chart.draw(data, options);
  }

});

app.controller('hourlyCommitChartController', function ($scope) {

  // Load Charts and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart']
  });

  // Draw the pie chart for Contributor List when Charts is loaded.
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Hours', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', {
        role: 'annotation'
      }],
      ['Sunday', 10, 24, 20, 32, 18, 5, 2, 2, ''],
      ['Monday', 16, 22, 23, 30, 16, 9, 3, 4, ''],
      ['Tuesday', 28, 19, 29, 30, 12, 13, 6, 8, ''],
      ['Wedneday', 28, 19, 29, 30, 12, 13, 6, 8, ''],
      ['Thursday', 28, 19, 29, 30, 12, 13, 6, 8, ''],
      ['Friday', 28, 19, 29, 30, 12, 13, 6, 8, ''],
      ['Saturday', 28, 19, 29, 30, 12, 13, 6, 8, '']
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
      legend: false
    };

    var chart = new google.visualization.BarChart(document.querySelector('#hourly-commit-chart_' + $scope.repoIndex));
    chart.draw(data, options);
  }

});
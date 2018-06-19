app.controller('contributorListChartController', function ($scope) {

  // Load Charts and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart']
  });

  // Draw the pie chart for Contributor List when Charts is loaded.
  google.charts.setOnLoadCallback(contributorListChart);

  function contributorListChart() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Contributor');
    data.addColumn('number', 'Total Commits');
    data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
    data.addRows([
      ['harshalc', 1, createCustomTooltipContent('harshalc', 1)],
      ['anit', 1, createCustomTooltipContent('anit', 1)]
    ]);

    
    var options = {
      title: 'Contributor List',      
      is3D: true,
      tooltip: { isHtml: true }
    };

    
    var chart = new google.visualization.PieChart(document.querySelector('#contributor-list-chart_'+ $scope.repo.name ));
    chart.draw(data, options);
  }

  function createCustomTooltipContent(name, value) {
    return '<div style="width:100px;height:50px;padding:3px;border:none;text-align:left">' +
      '<img src="https://avatars2.githubusercontent.com/u/4576620?v=4" style = "width:20px; height:20px; border-radius: 1000px; border:1px solid #2699FB;">'
      + '<h6 style = "font-size:11px; display:inline; margin:2px;padding-left:3px">'+ name + '</h6 >'
      + '<p style="font-size:9px;padding:5px"><strong>' + value + ' Commits</strong></p>'
      + '</div> ';
  }

});

app.controller('commitActivityChartController', function ($scope) {

  // Load Charts and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart']
  });

  // Draw the pie chart for Contributor List when Charts is loaded.
  google.charts.setOnLoadCallback(contributorListChart);

  function contributorListChart() {
    
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Day');
    data.addColumn('number', 'Total Commits');
    data.addRows([
      ['Sunday', 0],
      ['Monday', 3],
      ['Tuesday', 26],
      ['Wednesday', 20],
      ['Thursday', 39],
      ['Friday', 1],      
      ['Saturday', 0]      
    ]);

    var total_commits = 89;
    var options = {
      title: 'Last Year Commit Activity ( Total ' + total_commits + ' commits)',
      pieHole: 0.2,
      sliceVisibilityThreshold: 0
    };


    var chart = new google.visualization.PieChart(document.querySelector('#commit-activity-chart_'+ $scope.repo.name ));
    chart.draw(data, options);
  }

});

app.controller('weeklyAdditionDeletionChartController', function ($scope) {

  // Load Charts and the corechart package.
  google.charts.load('current', {'packages':['corechart', 'bar']});

  // Draw the pie chart for Contributor List when Charts is loaded.
  google.charts.setOnLoadCallback(contributorListChart);

  function contributorListChart() {
    
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
        0: {targetAxisIndex: 0},
        1: {targetAxisIndex: 1}
      },
      title: 'Weekly addition and deletion',
      vAxes: {
        // Adds titles to each axis.
        0: {title: 'Addition'},
        1: {title: 'Deletion'}
      }
    };


    var chart = new  google.visualization.ColumnChart(document.querySelector('#weekly-addition-deletion-chart_'+ $scope.repo.name ));
    chart.draw(data, options);
  }

});

app.controller('weeklyCommitCountChartController', function ($scope) {

  // Load Charts and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart']
  });

  // Draw the pie chart for Contributor List when Charts is loaded.
  google.charts.setOnLoadCallback(contributorListChart);

  function contributorListChart() {
        
      var data = google.visualization.arrayToDataTable([
        ['Week', 'All', 'Owner'],
        ['1',  0,      0],
        ['2',  3,      1],
        ['3',  3,       3],
        ['4',  0,      0]
      ]);

      var options = {
        title: 'weekly commit count for the repository',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

    var chart = new google.visualization.LineChart(document.querySelector('#weekly-commit-count-chart_'+ $scope.repo.name ));
    chart.draw(data, options);
  }

});

app.controller('hourlyCommitChartController', function ($scope) {

  // Load Charts and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart']
  });

  // Draw the pie chart for Contributor List when Charts is loaded.
  google.charts.setOnLoadCallback(contributorListChart);

  function contributorListChart() {
    
    var data = google.visualization.arrayToDataTable([
      ['Hours', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', { role: 'annotation' } ],
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
      legend: { position: 'top'},
      bar: { groupWidth: '50%' },
      isStacked: true
    };

    var chart = new google.visualization.BarChart(document.querySelector('#hourly-commit-chart_'+ $scope.repo.name ));
    chart.draw(data, options);
  }

});
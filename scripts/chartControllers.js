app.controller('contributorListChartController', function () {

  // Load Charts and the corechart package.
  google.charts.load('current', {
    'packages': ['corechart']
  });

  // Draw the pie chart for Contributor List when Charts is loaded.
  google.charts.setOnLoadCallback(contributorListChart);

  function contributorListChart() {
    // Create the data table for Sarah's pizza.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Contributor');
    data.addColumn('number', 'Total Commits');
    data.addColumn({'type': 'string', 'role': 'tooltip', 'p': {'html': true}});
    data.addRows([
      ['harshalc', 1, createCustomTooltipContent('harshalc', 1)],
      ['anit', 1, '']
    ]);

    // Set options for Sarah's pie chart.
    var options = {
      title: 'Contributor List',
      width: 400,
      height: 400,
      is3D: true,
      tooltip: { isHtml: true }
    };

    // Instantiate and draw the chart for Sarah's pizza.
    var chart = new google.visualization.PieChart(document.getElementById('contributor-list-chart'));
    chart.draw(data, options);
  }

  function createCustomTooltipContent(name, value) {
    return '<img src="https://avatars2.githubusercontent.com/u/4576620?v=4" style="width:40px; height:40px; border-radius: 1000px; border:1px solid #2699FB"> <h6>harshalc</h6>';
  }

});
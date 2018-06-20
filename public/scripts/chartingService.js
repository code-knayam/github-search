app.factory('ChartingService', function () {

  _operateContributorListResponse = function (response) {

    var operatedResponse = [];
    for (var index in response) {
      var contriDetails = [];
      contriDetails.push(response[index].author.login);
      contriDetails.push(response[index].total);
      contriDetails.push(createCustomTooltipContent(response[index].author.login, response[index].total, response[index].author.avatar_url));
      operatedResponse.push(contriDetails);
    }

    return operatedResponse;
  }

  function createCustomTooltipContent(name, value, avatar_url) {
    return '<div style="width:100px;min-height:53px;padding:3px;border:none;text-align:left">' +
      '<img src="' + avatar_url + '" style = "width:30px; height:30px; border-radius: 1000px; border:1px solid #2699FB;">' +
      '<h6 style = "font-size:11px; display:inline; margin:2px;padding-left:3px">' + name + '</h6 >' +
      '<p style="font-size:9px;padding:7px 5px"><strong>' + value + ' Commits</strong></p>' +
      '</div> ';
  }

  _operateCommitActivityResponse = function (response) {
    var operatedResponse = [
      ['Sunday', 0],
      ['Monday', 0],
      ['Tuesday', 0],
      ['Wednesday', 0],
      ['Thursday', 0],
      ['Friday', 0],
      ['Saturday', 0]
    ];

    for (var index in response) {
      for (var dayIndex in response[index].days) {
        operatedResponse[dayIndex][1] += response[index].days[dayIndex];
      }
    }

    return operatedResponse;
  }

  _operateWeeklyAddDelResponse = function (response) {
    var operatedResponse = [];

    for (var index in response) {
      var weekDetails = [];      
      weekDetails.push(index + 1);
      weekDetails.push(response[index][1]);
      weekDetails.push(response[index][2]);
      operatedResponse.push(weekDetails);
    }

    return operatedResponse;
  }

  _operateWeeklyCommitCountResponse = function (response) {
    var operatedResponse = [];

    for (var index in response.all) {
      var commitDetails = [index + 1, 0, 0];
      commitDetails[1] += response.all[index];
      commitDetails[2] += response.owner[index];
      operatedResponse.push(commitDetails);
    }
    return operatedResponse;
  }

  _operateHourlyCommitEachDayResponse = function (response) {
    var operatedResponse = [
      ['Sunday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['Monday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['Tuesday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['Wedneday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['Thursday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['Friday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ['Saturday', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    for (var index in response) {
      operatedResponse[response[index][0]][response[index][1] + 1] += response[index][2]
    }
    console.log(operatedResponse);
    return operatedResponse;
  }

  return {
    operateContributorListResponse: _operateContributorListResponse,
    operateCommitActivityResponse: _operateCommitActivityResponse,
    operateWeeklyAddDelResponse: _operateWeeklyAddDelResponse,
    operateWeeklyCommitCountResponse: _operateWeeklyCommitCountResponse,
    operateHourlyCommitEachDayResponse: _operateHourlyCommitEachDayResponse
  }
})
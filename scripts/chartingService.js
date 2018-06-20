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

  return {
    operateContributorListResponse: _operateContributorListResponse,
    operateCommitActivityResponse: _operateCommitActivityResponse
  }
})
angular.module('newsSummaryApp')
.controller('NewsSummaryController', ['$http', function($http) {
  var self = this;
  this.headlines = [];

  self.getAll = function() {
    return $http.get('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/football?')
    .then(_handleResponseFromApi);
  };

  function _handleResponseFromApi(response) {
    console.log(response);
    return response.data.response.results.map(function(data){
      return data.webTitle;
    });

  }

  this.getAll().then(function(headlines){
    self.headlines = headlines;
  });

}]);

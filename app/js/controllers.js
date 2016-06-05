angular.module('newsSummaryApp')
.controller('NewsSummaryController', ['$http', function($http) {
  var self = this;
  this.headlines = [];

  self.getAll = function() {
    return $http.get('https://api.github.com/users/chriselevate')
    .then(_handleResponseFromApi);
  };

  function _handleResponseFromApi(response) {
    data = response.data;
    return data.login;
  }

  this.getAll().then(function(headlines){
    self.headlines = headlines;
  });

}]);

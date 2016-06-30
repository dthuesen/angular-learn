// Define the App module
var App = angular.module('App', []);

// Define the controller with $http GET request
App.controller('MainController', function MainController($scope, $http) {

  var onUserComplete = function(response) {
    $scope.user = response.data;
  };

  var onError = function(reason) {
    $scope.error = "Could not fetch the user";
  };

  $http.get('https://ap.github.com/users/dthuesen')
       .then(onUserComplete, onError);

  $scope.message = "Hello Angular!";

});
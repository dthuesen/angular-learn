// The IIFE (Immediately Invoking Function Expression)
// for not pulluting the global namespace
(function() {

  // Define the App module. The variable 'app' can have any name
  // Two parameters are necessary for the module: name and array of dependences
  var app = angular.module('githubViewer', []);

  // The controller function
  var MainController = function($scope, $http) {

    var onUserComplete = function(response) {
      $scope.user = response.data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the user";
    };

    $http.get('https://api.github.com/users/dthuesen')
      .then(onUserComplete, onError);

    $scope.message = "Hello Angular!";

  };

  // Registration of the controller
  // first argument = name of the controller
  // second argument = calling the controller function
  app.controller('MainController', MainController);


}());
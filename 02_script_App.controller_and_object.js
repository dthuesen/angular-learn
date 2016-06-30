
// var MainController = function($scope) {
  
//   $scope.message = "Hello Angular!";
  
// };

// Define the App module
var App = angular.module('App', []);

// Define the MainController controller on the App module

App.controller('MainController', function MainController($scope) {
  
  var person = {
    firstName: "Detlef",
    lastName: "von der Thüsen",
    imageSrc: "https://avatars0.githubusercontent.com/u/16188818?v=3&s=460"
  }
  
  $scope.message = "Hello Angular!";
  $scope.person = person;
  
});


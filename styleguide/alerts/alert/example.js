angular.module('brandai.example.alert', ['ui.bootstrap']).
controller('ExampleAlertController', function ($scope) {

  $scope.showAlert = true;
  
  $scope.toggleAlert = function() {
    $scope.showAlert = !$scope.showAlert;
  };

});

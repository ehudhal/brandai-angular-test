angular.module('brandai.example.alert', ['ui.bootstrap']);
angular.module('brandai.example.alert').controller('ExampleAlertController', function ($scope) {

  $scope.showAlert = true;
  
  $scope.toggleAlert = function() {
    $scope.showAlert = !$scope.showAlert;
  };

});

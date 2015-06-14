angular.module('brandai.example.timepicker', ['ui.bootstrap']);
angular.module('brandai.example.timepicker').controller('ExampleTimepickerController', function ($scope, $log) {
  $scope.time = new Date();

  $scope.clear = function() {
    $scope.time = null;
  };
});

angular.module('brandai.example.button.checkbox', ['ui.bootstrap']);
angular.module('brandai.example.button.checkbox').controller('ExampleButtonCheckboxController', function ($scope) {
  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };
});

angular.module('brandai.example.pagination', ['ui.bootstrap']);
angular.module('brandai.example.pagination').controller('ExamplePagerController', function ($scope) {
  $scope.currentPage = 2;
  $scope.totalItems = 50;
});

var LoginApp = angular.module("LoginApp", ["ui.router", "ui.bootstrap", "oc.lazyLoad", "ngSanitize"]);
LoginApp.controller('LoginController', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
    $scope.$on('$viewContentLoaded', function () {
    });
    $scope.loginAuthentication = function (user) {
        if (user) {
            $http.get('localhost:49247/api/Login/loginAuthentication', { param: user }).then(function (response) {
                $rootScope.userData = response.data;
                $window.location.path = 'index.html';
            }, function (response) {
                alert('Incorrect Username or Password! Please try again..!');
            });
        }
    }
}]);
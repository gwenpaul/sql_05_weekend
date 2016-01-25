var sqlApp = angular.module('orderApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/addresses', {
            templateUrl: 'html file',
            controller: 'address controller'
        })
        .when('/orders', {
            templateUrl: 'orders html',
            controller: 'orders controller'
        })
        .when('/useraddresses', {
            templateUrl: 'user addresses html',
            controller: 'user addresses controller'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);


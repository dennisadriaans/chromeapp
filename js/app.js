var app = angular.module('app', ['ngRoute','ngMaterial']);

app.config(function ($interpolateProvider,  $routeProvider, $locationProvider) {

    $routeProvider

        .when('/test', {

            templateUrl: "../frameless_window.html",
            controller:"TaskController"
        })
    $locationProvider.html5Mode(true);


});

app.controller('MyController', function($scope, $mdSidenav, $http) {

    chrome.app.window.current().isAlwaysOnTop();

    document.cookie = 'auth_tkt=4eef912128e7231653f8b8b97e7b61e3620ea77e1674d4116decbabb55008439e6ecafa733753e0c2a565d5d9ccd4c64c5542adf107cf3df5f504b7c854b5eae552423e04'

    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };

    data = {
        username:  "dennis",
        password: "h5XJj4Nn0MFc"
    }

    //password not set

    function login()
    {
        $http({
            url: 'http://portal.creativecreation.nl/login',
            method: 'POST',
            crossDomain: true,
            withCredentials: true,
            data: 'username=dennis&password=[password]',
            headers: {'Content-type': 'application/x-www-form-urlencoded'}
        }).success(function(data) {
            getUserData();
        });
    }
    function getUserData() {
        $http({
            url: 'http://portal.creativecreation.nl/api/person/4/',
            method: 'GET',
            crossDomain: true, // testen
            withCredentials: true, // testen
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }).success(function(data) {
            $scope.lists = data.lists;
            console.log($scope.lists);
        });
    }

    login();

    $scope.fadeOutDefault = function()
    {
        console.log('alert');
    }

});

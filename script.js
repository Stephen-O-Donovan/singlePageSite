// script.js

    // create the module and name it singlePageApp
    var singlePageApp = angular.module('singlePageApp', []);

    singlePageApp.config(function($routeProvider){
        $routeProvider

        //route for home page
        .when('/', {
            templateUrl : pages/home.html,
            controller : 'mainController'
        })

        //route for home page
        .when('/about', {
            templateUrl : pages/about.html,
            controller : 'aboutController'
        })

        //route for home page
        .when('/contact', {
            templateUrl : pages/contact.html,
            controller : 'contactController'
        });
    });

    // create the controller for the home page
    singlePageApp.controller('mainController', function($scope) {
        $scope.message = 'This is the home page to a single page site';
    });

    // create the controller for the home page
    singlePageApp.controller('aboutController', function($scope) {
        $scope.message = 'This is the about page';
    });

    // create the controller for the home page
    singlePageApp.controller('contactController', function($scope) {
        $scope.message = 'This is the contact page';
    });
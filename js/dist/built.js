/**
 * html5-angular-boilerplate - Personal angular boilerplate to get started on new projects
 * @version v0.0.0
 * @link https://github.com/juanpasolano/html5-angular-boilerplate
 * @license BSD-2-Clause
 */

var app = angular.module('ubicala', ['ui.router']);
app.config( ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "partials/html/home.html",
                controller: 'HomeCtrl'
            })
            .state('styleguide', {
                url: "/styleguide",
                templateUrl: "partials/html/styleguide.html",
                controller:"StyleguideCtrl"
            })
    }
]);


app.controller('MainCtrl', ['$scope',
    function($scope) {
        $scope.welcome = 'Bienvenido a Ubicala';
    }
]);
app.controller('HomeCtrl', ['$scope',
    function($scope) {
    }
]);
app.controller('StyleguideCtrl', ['$scope',
    function($scope) {
        $scope.people = [
            {
                id:1,
                name: 'Charles Dickens',
                passport: '678913234',
                profession: 'Writer'
            },
            {
                id:2,
                name: 'Jaron Lanier',
                passport: '671230213',
                profession: 'Writer'
            }
        ];

        $scope.alert = function(id){
            alert(id);
        }
    }
]);
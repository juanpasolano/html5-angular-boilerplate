/**
 * html5-angular-boilerplate - Personal angular boilerplate to get started on new projects
 * @version v0.0.0
 * @link https://github.com/juanpasolano/html5-angular-boilerplate
 * @license BSD-2-Clause
 */

var app = angular.module('ubicala', ['ui.router', 'mgcrea.ngStrap', 'ngAnimate', 'ngSanitize']);
app.config( ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/state1");
        //
        // Now set up the states
        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "partials/html/state1.html",
                controller: 'State1Controller'
            })
            .state('state1.list', {
                url: "/list",
                templateUrl: "partials/html/state1.list.html",
                controller: function($scope) {
                    $scope.items = ["A", "List", "Of", "Items"];
                }
            })
            .state('state2', {
                url: "/state2",
                templateUrl: "partials/html/state2.html",
                controller: 'State2Controller'
            })
            .state('state2.list', {
                url: "/list",
                templateUrl: "partials/html/state2.list.html",
                controller: function($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }
            })
    }
]);


app.controller('MainCtrl', ['$scope',
    function($scope) {
        $scope.welcome = 'Bienvenido a Ubicala';
    }
]);

app.controller('State1Controller', ['$scope',
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


app.controller('State2Controller', ['$scope',
    function($scope) {
        $scope.modal = {
            "title": "Title",
            "content": "Hello Modal<br />This is a multiline message!"
        };

        $scope.alert = {
            "title": "Holy guacamole!",
            "content": "Best check yo self, you're not looking too good.",
            "type": "info"
        };
    }
]);
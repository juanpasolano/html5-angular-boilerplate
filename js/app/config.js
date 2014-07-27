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
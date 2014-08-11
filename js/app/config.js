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
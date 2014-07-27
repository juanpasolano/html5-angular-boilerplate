

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
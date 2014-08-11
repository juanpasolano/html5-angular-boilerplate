

app.controller('MainCtrl', ['$scope',
    function($scope) {
        $scope.welcome = 'Bienvenido a Ubicala';
    }
]);
app.controller('HomeCtrl', ['$scope', 'hotkeys',
    function($scope, hotkeys) {
        hotkeys.add({
            combo: 's',
            description: 'This one goes to 11',
            callback: function() {
                console.log('This should start the search process');
            }
        });
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
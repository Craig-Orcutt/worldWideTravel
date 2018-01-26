angular.module('travelPlans', ['ngRoute'])
    .config($routeProvider => {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: 'bookCtrl'
            })
            .otherwise('/')
    })

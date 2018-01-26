angular
    .module('travelPlans')
    .controller('bookCtrl', function ($scope, travelFactory) {
        travelFactory.travelData()
            .then((data) => {
                $scope.books = data.data.guides;
            })
    })
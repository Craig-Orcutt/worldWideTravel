'use strict';

angular
    .module('travelPlans')
    .factory('travelFactory', function ($q, $http) {
        let travelData = () => {
            return $q(function (resolve, reject) {
                $http
                    .get("../data/guides.json")
                    .then((data) => {
                        console.log('httpreq',data)
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        };
        return { travelData };
    })
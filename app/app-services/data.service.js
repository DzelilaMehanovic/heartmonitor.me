(function () {
    'use strict';

    angular
        .module('app')
        .factory('DataService', Service);

    function Service($http, $q) {
        var service = {};
        service.GetDiets = GetDiets;
        service.GetDiseases = GetDiseases;

        return service;

        function GetDiets() {
            return $http.get('/api/data/diets').then(handleSuccess, handleError);
        }
        function GetDiseases() {
            return $http.get('/api/data/diseases').then(handleSuccess, handleError);
        }

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();

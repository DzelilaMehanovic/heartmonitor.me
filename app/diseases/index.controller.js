(function () {
    'use strict';

    angular
        .module('app')
        .controller('Diseases.IndexController', Controller);

    function Controller(DataService) {
        var vm = this;
        vm.diseases = null;

        initController();

        function initController() {
            DataService.GetDiseases().then(function (diseases) {
                vm.diseases = diseases;
                console.log(vm.diseases);
            });
        }
    }

})();


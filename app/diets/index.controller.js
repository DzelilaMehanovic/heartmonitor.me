(function () {
    'use strict';

    angular
        .module('app')
        .controller('Diets.IndexController', Controller);

    function Controller(DataService) {
        var vm = this;
        vm.diets = null;

        initController();

        function initController() {
            DataService.GetDiets().then(function (diets) {
                vm.diets = diets;
                console.log(vm.diets.name);
            });
        }
    }

})();


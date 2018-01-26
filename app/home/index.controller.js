(function () {
    'use strict';
    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller() {
       console.log('Home controller is running');
    }

})();

(function () {
    'use strict';
    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(UserService) {
       console.log('Home controller is running');
    }

})();

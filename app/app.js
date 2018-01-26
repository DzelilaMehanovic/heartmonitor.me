(function () {
    'use strict';

    angular
        .module('app', ['ui.router'])
        .config(config)
        .run(run);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/index.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'home' }
            })
            .state('risks', {
                url: '/risks',
                templateUrl: 'risks/index.html',
                controller: 'Risks.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'risks' }
            })
            .state('diseases', {
                url: '/diseases',
                templateUrl: 'diseases/index.html',
                controller: 'Diseases.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'diseases' }
            })
            .state('diets', {
                url: '/diets',
                templateUrl: 'diets/index.html',
                controller: 'Diets.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'diets' }
            })
            .state('account', {
                url: '/account',
                templateUrl: 'account/index.html',
                controller: 'Account.IndexController',
                controllerAs: 'vm',
                data: { activeTab: 'account' }
            });
    }

    function run($http, $rootScope, $window) {
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $rootScope.activeTab = toState.data.activeTab;
        });
    }

    $(function () {
        $.get('/app/token', function (token) {
            window.jwtToken = token;
            console.log('Token: '+token);
            angular.bootstrap(document, ['app']);
        });
    });
})();

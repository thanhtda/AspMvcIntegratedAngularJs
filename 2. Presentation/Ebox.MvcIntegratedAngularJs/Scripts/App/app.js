﻿(function () {
    var dependencies = [
            'ui.bootstrap',
            'ngAnimate',
            'valdr',
            'blockUI',
            'angularMoment'
    ];

    angular.module('appCore', dependencies);
})();






//var configFunction = function ($stateProvider, $httpProvider, $locationProvider, $routeProvider) {

//    //$routeProvider.when('/index', { redirectTo: '/Home/Index' });
//    //$routeProvider.when('/about', { redirectTo: '/about' });
//    //$routeProvider.when('/contact', { redirectTo: '/contact' });

//    $locationProvider.html5Mode({
//        enabled: true,
//        requireBase: false
//    });
//};

//configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$routeProvider'];
//var runFunction = function ($rootScope, $location, $injector) {
//    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

//    });
//};
//runFunction.$inject = ['$rootScope', '$location', '$injector'];
//EBoxAngularMVCApp.config(configFunction).run(runFunction);
'use strict';

/**
 * @ngdoc overview
 * @name nomadWebApp
 * @description
 * # nomadWebApp
 *
 * Main module of the application.
 */
angular
  .module('nomadWebApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

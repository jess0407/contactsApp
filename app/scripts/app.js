'use strict';

angular
  .module('contactsAppApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'jQuery',
    'underscore'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('jQuery', [])
.factory('$', function() {
  return window.$;
});

angular.module('underscore', [])
.factory('_', function() {
  return window._;
});
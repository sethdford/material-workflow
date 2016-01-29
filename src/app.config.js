/*
  Main routes configuration
  This file will contain the settings of entire application and it's modules
*/

config.$inject = ['$routeProvider'];

export default function config($routeProvider) {
  $routeProvider
    .when('/', {
    })
    .otherwise({
      redirectTo: '/'
    });
}
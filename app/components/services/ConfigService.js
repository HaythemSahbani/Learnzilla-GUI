'use strict'

angular.module('learnzillaApp')
  .service('ConfigService', ['$resource', '$location', function ($resource, $location) {
    const service = this;

/*    service.protocol = 'http';
    service.url = $location.hostname;
    service.port = '8080';
    service.baseWsUrl = `${service.protocol}://${service.url}:${service.port}`;*/


    service.logIn = $resource('http://localhost:8080/login',  {user: "@user", password: "@password"});
    service.logout = $resource('localhost:8080/logout?benutzerId=123');



    return service;
  }]);

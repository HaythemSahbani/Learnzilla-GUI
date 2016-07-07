'use strict'

angular.module('learnzillaApp')
  .service('ConfigService', ['$resource', function ($resource) {
    const service = this;

    const url = 'http://localhost:8080/';
    /*    service.protocol = 'http';
     service.url = $location.hostname;
     service.port = '8080';
     service.baseWsUrl = `${service.protocol}://${service.url}:${service.port}`;*/


    service.logInRequest = $resource(`${url}login`, {user: "@user", password: "@password"});
    service.logout = $resource(`${url}logout`, {benutzerId: "@benutzerId"});
    service.getFrantwort = $resource(`${url}question`, {benutzerId: "@benutzerId"});
    service.getOnlineUsers = $resource(`${url}usersonline`);
    service.getZitat = $resource(`${url}zitat`);


    return service;
  }]);

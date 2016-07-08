'use strict'

angular.module('learnzillaApp')
  .service('RestService', ['$resource', function ($resource) {
    const service = this;

    const url = 'http://localhost:8080/';
    /*    service.protocol = 'http';
     service.url = $location.hostname;
     service.port = '8080';
     service.baseWsUrl = `${service.protocol}://${service.url}:${service.port}`;*/


    service.logIn = $resource(`${url}login`, {user: "@user", password: "@password"});
    service.logOut = $resource(`${url}logout`, {benutzerId: "@benutzerId"});
    service.getFrantwort = $resource(`${url}question`, {benutzerId: "@benutzerId", kategorie: "@kategorie"});
    service.getOnlineUsers = $resource(`${url}usersonline`);
    service.getZitat = $resource(`${url}zitat`);
    service.getCategories = $resource(`${url}kategorien`);
    service.sendAntwort = $resource(`${url}antwort`, {
      questionId: '@questionId',
      answerId1:'@answerId1',
      answerId2:'@answerId2',
      answerId3:'@answerId3',
      answerId4:'@answerId4'
    });


    return service;
  }]);

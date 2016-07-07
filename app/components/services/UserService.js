'use strict'

angular.module('learnzillaApp')
  .service('UserService', ['RestService', function (RestService) {
    const service = this;

    const user = {
      benutzerId: 0,
      benutzerName: 'Gast',
      fettigkeitsgrad: 0,
      highScore: 0
    };
    

    return service;
  }]);

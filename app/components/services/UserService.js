'use strict'

angular.module('learnzillaApp')
  .service('UserService', ['ConfigService', function (ConfigService) {
    const service = this;

    const user = {
      benutzerId: null,
      benutzerName: 'Gast',
      fettigkeitsgrad: 0,
      highScore: 0
    };

    service.goTologInPage = function logIn(user, password) {
      ConfigService.login.get({user: user, password: password}).then(
        function(result){
          user.benutzerId = result.data.benutzerid;
          user.benutzerName = result.data.benutzername;
          user.fettigkeitsgrad = result.data.fettigkeitsgrad;
          user.highScore = result.data.highscore;

        }
      );
    };

    return service;
  }]);

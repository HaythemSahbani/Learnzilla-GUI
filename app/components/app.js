'use strict';

angular.module('learnzillaApp', ['ui.router', 'ngResource'])
  .constant('Constants', {
    PLAY: 'play',
    STORY: 'story',
    GAME_MODE: 'gameMode',
    SIGN_UP: 'signUp',
    NOT_FOUND: 'notFound',
    CONTACT_US: 'contactUs'
  })
  .value('Model', {
    signInCredentials: {},
    user: {
      benutzerId: 0,
      benutzerName: 'Gast',
      fettigkeitsgrad: 0,
      highScore: 0
    },
    gewaeltesKategorieId: null,
    aktuelleFrantwort: null
  });

'use strict';

angular.module('learnzillaApp', ['ui.router', 'ngResource'])
  .constant('Constants', {
      PLAY: 'play',
      STORY: 'story',
      GAME_MODE: 'gameMode',
      SIGN_UP: 'signUp',
      NOT_FOUND: 'notFound'
    }
  )
  .value('Model', {
    signInCredentials: {}
  });

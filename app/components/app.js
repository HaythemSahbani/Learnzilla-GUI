'use strict';

angular.module('learnzillaApp', ['ui.router', 'ngResource'])
  .constant('Constants', {
      PLAY: 'play',
      STORY: 'story',
      GAME_MODE: 'gameMode',
      NOT_FOUND: 'notFound'
    }
  );

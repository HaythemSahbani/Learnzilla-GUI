'use strict'

angular.module('learnzillaApp')
  .controller('learnzillaCtrl', ['$state', function ($state) {
    console.log($state.get('home.play', {}, {absolute: true}));
  }
  ]);

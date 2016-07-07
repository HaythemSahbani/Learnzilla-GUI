'use strict'

angular.module('learnzillaApp')

  .controller('storyCtrl', ['ViewsService', 'Constants',
    function (ViewsService, Constants) {
      const vm = this;
      vm.setNextView = function setNextView() {
        return ViewsService.setCurrentView(Constants.GAME_MODE);
      }
    }
  ]);

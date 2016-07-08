'use strict'

angular.module('learnzillaApp')

  .controller('storyCtrl', ['ViewsService', 'Constants', 'Model',
    function (ViewsService, Constants, Model) {
      const vm = this;
      

      vm.setNextView = function setNextView() {
        return ViewsService.setCurrentView(Constants.GAME_MODE);
      }
    }
  ]);

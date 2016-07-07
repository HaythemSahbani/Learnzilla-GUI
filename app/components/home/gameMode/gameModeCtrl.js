'use strict'

angular.module('learnzillaApp')
  .controller('gameModeCtrl', [ 'ViewsService', 'Constants',  function (ViewsService, Constants) {
    const vm = this;
    vm.startSingleZilla = function startSingleZilla() {
      return ViewsService.setCurrentView(Constants.PLAY);
    }
  }
  ]);

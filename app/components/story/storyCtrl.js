'use strict'

angular.module('learnzillaApp')

  .controller('storyCtrl', [ 'ViewsService', function (ViewsService) {
const vm = this;
vm.setNextView = function setNextView(){
  debugger;
  return ViewsService.setCurrentView('gameMode');
}
  }
  ]);

'use strict'

angular.module('learnzillaApp')

  .controller('storyCtrl', ['ViewsService', 'Constants', 'Model',
    function (ViewsService, Constants, Model) {
      const vm = this;
/*      vm.update = function(){
       return  Model.user.fettigkeitsgrad++;
      };*/
      vm.setNextView = function setNextView() {
        return ViewsService.setCurrentView(Constants.GAME_MODE);
      }
    }
  ]);

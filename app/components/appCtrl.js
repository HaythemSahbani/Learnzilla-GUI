'use strict'

angular.module('learnzillaApp')
    .controller('appCtrl', [ 'ViewsService',  function (ViewsService) {

      const vm = this;


        vm.getCurrentView = function getCurrentView(){
          return ViewsService.getCurrentView();
        }

        }
    ]);

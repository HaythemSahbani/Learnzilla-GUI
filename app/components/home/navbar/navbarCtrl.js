'use strict'

angular.module('learnzillaApp')

    .controller('navbarCtrl', [ 'ViewsService', 'Constants', function (ViewsService, Constants) {
      const vm = this;

      vm.signUpIn = function signUpIn() {
        return ViewsService.setCurrentView(Constants.SIGN_UP);
      }
    }
    ]);

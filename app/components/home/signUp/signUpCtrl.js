'use strict'

angular.module('learnzillaApp')

  .controller('signUpCtrl', [ 'ConfigService', 'Model', function (ConfigService, Model) {
    const vm = this;
    vm.credentials = Model.signInCredentials;
    vm.signIn = function signIn() {
      vm.reqData = ConfigService.goTologInPage.get(Model.signInCredentials);

    };

    vm.signUp = function signUp(){
      // TODO return ConfigService.signUp()
    }



  }
  ]);

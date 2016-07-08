'use strict'

angular.module('learnzillaApp')

  .controller('signUpCtrl', [ 'RestService', 'Model', function (RestService, Model) {
    const vm = this;
    vm.credentials = Model.signInCredentials;
    vm.signIn = function signIn() {
      vm.reqData = RestService.logIn.get(Model.signInCredentials);
      console.log(vm.reqData);

    };

    vm.signUp = function signUp(){
      // TODO return ConfigService.signUp()
    }



  }
  ]);

'use strict'

angular.module('learnzillaApp')

  .controller('signUpCtrl', [ 'ConfigService', 'Model', function (ConfigService, Model) {
    const vm = this;
    vm.credentials = Model.signInCredentials;
    vm.signIn = function signIn() {
      return ConfigService.logIn.get(Model.signInCredentials).then(
        function(response){
          vm.reqData = response.data;
        }
      );
    };

    vm.signUp = function signUp(){
      // TODO return ConfigService.signUp()
    }



  }
  ]);

'use strict'

angular.module('learnzillaApp')

  .controller('signUpCtrl', [ 'RestService', 'Model', function (RestService, Model) {
    const vm = this;
    vm.credentials = Model.signInCredentials;
    vm.signIn = function signIn() {
      vm.reqData = RestService.logIn.get(Model.signInCredentials,
        function(response) {
          console.log(response);
          Model.user.benutzerId = response.benutzerid;
          Model.user.benutzerName = response.benutzername;
          Model.user.highScore = response.highscore;
          Model.user.fettigkeitsgrad = response.fettigkeitsgrad;
        },
        function(response) {
          console.log('Error: ' + response.status + ' ' + response.statusText);
        });

      console.log(Model.user);

    };

    vm.signUp = function signUp(){
      // TODO return ConfigService.signUp()
    }



  }
  ]);

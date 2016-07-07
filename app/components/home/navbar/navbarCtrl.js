'use strict'

angular.module('learnzillaApp')

    .controller('navbarCtrl', [ 'ConfigService', function (ConfigService) {
      const vm = this;
      vm.logIn = function logIn() {
        console.log('login success');
        return ConfigService.logIn.get({user:'bla', password: 'blabla'});
      }
    }
    ]);

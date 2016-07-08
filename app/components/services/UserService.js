'use strict'

angular.module('learnzillaApp')
  .service('UserService', ['Model', function (Model) {
    const service = this;

    const user = Model.user;

    service.updateZilla = function updateZilla(){
      
    };

    return service;
  }]);

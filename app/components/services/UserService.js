'use strict'

angular.module('learnzillaApp')
  .service('UserService', ['Model', function (Model) {
    const service = this;

    const user = Model.user;

    service.updateZilla = function updateZilla(){
      switch(user.fettigkeitsgrad) {
        case 1:
          return 'assets/img/bauch_stufe1.png';
          break;
        case 2:
          return 'assets/img/bauch_stufe2.png';
          break;
        case 3:
          return 'assets/img/bauch_stufe3.png';
          break;
        case 4:
          return 'assets/img/bauch_stufe4.png';
          break;
        case 5:
          return 'assets/img/bauch_stufe5.png';
          break;
        default:
        return 'assets/img/mund_zu.png'
      }
    };

    return service;
  }]);

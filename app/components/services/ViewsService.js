'use strict'

angular.module('learnzillaApp')
  .service('ViewsService', [ 'Constants', '$state', '$stateParams',
    function (Constants, $state, $stateParams) {
    const service = this;
      let currentView = Constants.STORY;

    service.setCurrentView = function setCurrentView(view){
      $state.transitionTo($state.current, $stateParams, {
        reload: true,
        inherit: false,
        notify: true
      });
      currentView = view;
    };

    service.getCurrentView = function getCurrentView() {
      return currentView;
    };



    return service;
  }
  ]);

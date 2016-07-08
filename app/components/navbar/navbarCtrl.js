'use strict'

angular.module('learnzillaApp')

    .controller('navbarCtrl', [ 'ViewsService', 'Constants', 'Model',  function (ViewsService, Constants, Model) {
      const vm = this;
      vm.user = Model.user;
      vm.goTologInPage = function goTologInPage() {
        return ViewsService.setCurrentView(Constants.SIGN_UP);
      };
      vm.goToStoryPage = function goToStoryPage() {
        return ViewsService.setCurrentView(Constants.STORY);
      };
      vm.goToContactUsPage = function goToContactUsPage() {
        return ViewsService.setCurrentView(Constants.CONTACT_US);
      };

    }
    ]);

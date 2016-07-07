'use strict'

angular.module('learnzillaApp')

    .controller('navbarCtrl', [ 'ViewsService', 'Constants', function (ViewsService, Constants) {
      const vm = this;

      vm.goTologInPage = function goTologInPage() {
        return ViewsService.setCurrentView(Constants.SIGN_UP);
      };
      vm.goToStoryPage = function goToStoryPage() {
        return ViewsService.setCurrentView(Constants.STORY);
      };
      vm.goToPage = function goToPage(page) {
        return ViewsService.setCurrentView(page);
      }
      
    }
    ]);

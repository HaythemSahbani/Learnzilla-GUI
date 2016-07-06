'use strict';

angular.module('learnzillaApp')
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/learnzilla/404-not-found');

      $stateProvider
        .state('home', {
          url: '/learnzilla',
          templateUrl: '../index.html',
          controller: 'appCtrl',
          controllerAs: 'app',
          views: {
            'learnzilla': {
              templateUrl: 'components/learnzilla/learnzilla.html',
              controller: 'learnzillaCtrl',
              controllerAs: 'learnzilla'
            },
            'footer': {
              templateUrl: 'components/footer/footer.html',
              controller: 'footerCtrl',
              controllerAs: 'footer'
            },
            'story': {
              templateUrl: 'components/story/story.html',
              controller: 'storyCtrl',
              controllerAs: 'story'
            }
          },
          absolute: true
        })
        .state('home.play', {
          url: '/play',
          templateUrl: 'components/play/play.html',
          controller: 'playCtrl',
          controllerAs: 'play',
          views: {
            '': {
              templateUrl: 'components/gameMode/gameMode.html',
              controller: 'gameModeCtrl',
              controllerAs: 'gameMode'
            },
            'navbar@home': {
              templateUrl: 'components/navbar/navbar.html',
              controller: 'navbarCtrl',
              controllerAs: 'navbar'
            },
            'notFound': {
              templateUrl: 'components/notFound/notFound.html',
              controller: 'notFoundCtrl',
              controllerAs: 'notFound'
            }
          },
          absolute: true
        })
        .state('home.contactUs', {
          url: '/learnzilla/contactUs',
          templateUrl: 'components/contactUs/contactUs.html',
          controller: 'contactUsCtrl',
          controllerAs: 'contactUs'
        })
        .state('home.notFound', {
          url: '404-not-found'
        });


    }]);


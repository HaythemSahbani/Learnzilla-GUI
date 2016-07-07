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
            'navbar': {
              templateUrl: 'components/home/navbar/navbar.html',
              controller: 'navbarCtrl',
              controllerAs: 'navbar'
            },
            'footer': {
              templateUrl: 'components/footer/footer.html',
              controller: 'footerCtrl',
              controllerAs: 'footer'
            },
            'story': {
              templateUrl: 'components/home/story/story.html',
              controller: 'storyCtrl',
              controllerAs: 'story'
            },
            'gameMode': {
              templateUrl: 'components/home/gameMode/gameMode.html',
              controller: 'gameModeCtrl',
              controllerAs: 'gameMode'
            },
            'play': {
              templateUrl: 'components/home/play/play.html',
              controller: 'playCtrl',
              controllerAs: 'play'
            },
            'notFound': {
              templateUrl: 'components/home/notFound/notFound.html',
              controller: 'notFoundCtrl',
              controllerAs: 'notFound'
            }
          }
        })
        .state('home.story', {})
        .state('home.gameMode', {})
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
            'notFound': {
              templateUrl: 'components/notFound/notFound.html',
              controller: 'notFoundCtrl',
              controllerAs: 'notFound'
            }
          }
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

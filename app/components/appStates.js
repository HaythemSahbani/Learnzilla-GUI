'use strict';

angular.module('learnzillaApp')
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/learnzilla/404-not-found');

      $stateProvider
        .state('home', {
          url: '/learnzilla',
          templateUrl: '../index.html',
          views: {
            'story@': {
              templateUrl: 'components/story/story.html',
              controller: 'storyCtrl',
              controllerAs: 'story'
            },
            'gameMode@': {
              templateUrl: 'components/gameMode/gameMode.html',
              controller: 'gameModeCtrl',
              controllerAs: 'gameMode'
            },
            'play@': {
              templateUrl: 'components/play/play.html',
              controller: 'playCtrl',
              controllerAs: 'play'
            },
            'notFound@': {
              templateUrl: 'components/notFound/notFound.html',
              controller: 'notFoundCtrl',
              controllerAs: 'notFound'
            }
          }
        })
        .state('home.story',
        {
          url: '/story-line'
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

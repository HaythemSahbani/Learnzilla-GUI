'use strict'

angular.module('learnzillaApp')
  .service('ConfigService', ['$resource', '$location', function ($resource, $location) {
    const service = this;

    service.protocol = 'http';
    service.url = $location.hostname;
    service.port = '8080';
    service.baseWsUrl = `${service.protocol}://${service.url}:${service.port}`;


    service.login = $resource(url, '[paramDefaults]', '[actions]', 'options');


    return service;
  }]);

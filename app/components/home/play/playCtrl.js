'use strict'

angular.module('learnzillaApp')

  .controller('playCtrl', ['Model', 'RestService', function (Model, RestService) {
    const vm = this;
    vm.kategorien = RestService.getCategories.get({});
    console.log(JSON.stringify(vm.kategorien));
    let antwortenList = [];

    vm.updateAntwortList = function (antwort) {
      const antwortIndex = antwortenList.indexOf(antwort);
      if (antwortIndex != -1) {
        antwortenList.splice(antwortIndex, 1);
      }
      else {
        antwortenList.push(antwort);
      }
    };
    vm.setKategorie = function setKategorie(kategorieId) {
      Model.gewaeltesKategorieId = kategorieId;
      vm.setFrantwort();
    };
    vm.setFrantwort = function setFrantwort() {
      vm.neueFrage = true;
      antwortenList = [];
      vm.frantwort =
        RestService.getFrantwort.get({benutzerId: Model.user.benutzerId, kategorie: Model.gewaeltesKategorieId});
    };

    vm.submitAnswer = function submitAnswer() {
      vm.result = RestService.sendAntwort.save({fragenId: vm.frantwort.frageId, antwortenList:antwortenList});
      vm.neueFrage = false;
    };
  }
  ]);

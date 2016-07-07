'use strict'

angular.module('learnzillaApp')

  .controller('playCtrl', ['Model', 'RestService', function (Model, RestService) {
    const vm = this;
    vm.kategorien = RestService.getCategories;
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
      vm.getFrantwort();
    };
    vm.getFrantwort = function getFrantwort() {
      vm.neueFrage = true;
      antwortenList = [];
      vm.frantwort =
        RestService.getFrantwort({benutzerId: Model.user.benutzerId, kategorie: Model.gewaeltesKategorieId});
    };

    vm.submitAnswer = function submitAnswer() {
      vm.result = RestService.sendAntwort()
        .$save(Model.aktuelleFrantwort.frageId, antwortenList);
      vm.neueFrage = false;
    };
  }
  ]);

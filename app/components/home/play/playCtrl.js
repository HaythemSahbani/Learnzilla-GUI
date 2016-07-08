'use strict'

angular.module('learnzillaApp')

  .controller('playCtrl', ['Model', 'RestService', function (Model, RestService) {
    const vm = this;
    vm.kategorien = RestService.getCategories.get({});
    console.log(JSON.stringify(vm.kategorien));
    let antwortenList = [-1, -1, -1, -1];

    vm.updateAntwortList = function (antwort) {
      const antwortIndex = antwortenList.indexOf(antwort);
      if (antwortIndex != -1) {
        antwortenList[antwortIndex] = -1;
        //antwortenList.splice(antwortIndex, 1);
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
      antwortenList = [-1, -1, -1, -1];
      vm.frantwort =
        RestService.getFrantwort.get({
          benutzerId: Model.user.benutzerId,
          kategorie: Model.gewaeltesKategorieId
        });
    };

    vm.submitAnswer = function submitAnswer() {
      vm.result = RestService.sendAntwort.get({
        questionId: vm.frantwort.frage.fragenId,
        answerId1: antwortenList[0],
        answerId2: antwortenList[1],
        answerId3: antwortenList[2],
        answerId4: antwortenList[3]
      });
      vm.updateScore(vm.result.data);
      vm.neueFrage = false;
    };


    vm.updateScore = function updateScore(answer) {
        if(answer) {
          vm.richtig();
        }else{
          vm.falsch();
        }
      };


      vm.richtig = function richtig() {
        Model.user.highScore++;
        Model.user.fettigkeitsgrad = Model.user.fettigkeitsgrad < 5 ? Model.user.fettigkeitsgrad++ : 5;
      };
      vm.falsch = function falsch() {
        Model.user.fettigkeitsgrad = Model.user.fettigkeitsgrad >= 0 ? Model.user.fettigkeitsgrad-- : -1;
      }



  }
  ]);

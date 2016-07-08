'use strict'

angular.module('learnzillaApp')

  .controller('playCtrl', ['Model', 'RestService', function (Model, RestService) {
    const vm = this;
    vm.kategorien = RestService.getCategories.get({});
    console.log(JSON.stringify(vm.kategorien));
    vm.antwortenList = [-1, -1, -1, -1];

    vm.updateAntwortList = function (antwort) {
     // const antwortIndex = vm.antwortenList.indexOf(antwort);
      if (vm.antwortenList[antwort] != -1) {
        vm.antwortenList[antwortIndex] = -1;
        //antwortenList.splice(antwortIndex, 1);

      }
      else {
        vm.antwortenList[antwort] = antwort;
        // vm.antwortenList.push(antwort);
      }
    };
    vm.setKategorie = function setKategorie(kategorieId) {
      Model.gewaeltesKategorieId = kategorieId;
      vm.setFrantwort();
    };
    vm.setFrantwort = function setFrantwort() {
      vm.neueFrage = true;
      vm.antwortenList = [-1, -1, -1, -1];
      vm.frantwort =
        RestService.getFrantwort.get({
          benutzerId: Model.user.benutzerId,
          kategorie: Model.gewaeltesKategorieId
        });
    };

    vm.submitAnswer = function submitAnswer() {
      vm.response = RestService.sendAntwort.get({
        questionId: vm.frantwort.frage.fragenid,
        answerId1: vm.frantwort.antwortenList[vm.antwortenList[0]].antwortenid || -1,
        answerId2: vm.frantwort.antwortenList[vm.antwortenList[1]].antwortenid || -1,
        answerId3: vm.frantwort.antwortenList[vm.antwortenList[2]].antwortenid || -1,
        answerId4: vm.frantwort.antwortenList[vm.antwortenList[3]].antwortenid || -1
      },function(response) {
        //console.log(reponse);
        //console.log(reponse.answerTrue);
         // vm.updateScore(response.answerTrue);
        },
        function(response) {
          console.log('Error: ' + response.status + ' ' + response.statusText);
        });
      vm.updateScore(vm.response.answerTrue);
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
        vm.result = ' Richtig !!!';
        Model.user.highScore++;
        if(Model.user.fettigkeitsgrad < 5){
          Model.user.fettigkeitsgrad++;
        }
      };
      vm.falsch = function falsch() {
        vm.result = ' Falsch !!!';
        if(Model.user.fettigkeitsgrad >= 0){
          Model.user.fettigkeitsgrad--;
        }
      }



  }
  ]);

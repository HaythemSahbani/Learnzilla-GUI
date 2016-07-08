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
        vm.antwortenList[antwort] = -1;
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

    const checkAlist = function(i){
      if(vm.antwortenList[i] === -1) return -1;
      else return vm.frantwort.antwortenList[vm.antwortenList[i]].antwortenid;
    };
    vm.submitAnswer = function submitAnswer() {

      vm.response = RestService.sendAntwort.get({
        questionId: vm.frantwort.frage.fragenid,
        answerId1: checkAlist(0),
        answerId2: checkAlist(1),
        answerId3: checkAlist(2),
        answerId4: checkAlist(3)
      },function(response) {
          vm.updateScore(response.answerTrue);
        },
        function(response) {
          console.log('Error: ' + response.status + ' ' + response.statusText);
        });
      vm.neueFrage = false;
    };


    vm.updateScore = function updateScore(answer) {
      console.log(answer);
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

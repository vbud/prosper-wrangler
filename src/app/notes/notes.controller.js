'use strict';

angular.module('prosperWrangler')
  .controller('NotesCtrl', function ($scope, ProsperSvc) {
    ProsperSvc.notes({'$top': 30}).then( function(d) {
      console.log(d);
      $scope.notes = d;
    })
  });

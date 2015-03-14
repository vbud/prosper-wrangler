'use strict';

angular.module('prosperWrangler')
  .controller('DataDictionaryCtrl', function ($scope, ProsperSvc) {
    ProsperSvc.dataDictionary().then( function(d) {
      $scope.dictionary = d;
    });
  });

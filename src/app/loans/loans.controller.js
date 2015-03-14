'use strict';

angular.module('prosperWrangler')
  .controller('LoansCtrl', function ($scope, ProsperSvc) {
    ProsperSvc.loans({'$top': 30}).then( function(d) {
      console.log(d);
      $scope.loans = d;
    })
  });

'use strict';

angular.module('prosperWrangler')
  .controller('InvestmentsCtrl', function ($scope, ProsperSvc) {
    ProsperSvc.investments({'$top': 30}).then( function(d) {
      console.log(d);
      $scope.investments = d;
    })
  });

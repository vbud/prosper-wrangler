'use strict';

angular.module('prosperWrangler')
  .controller('AccountCtrl', function ($scope, ProsperSvc) {
    ProsperSvc.account().then( function(d) {
      $scope.account = d;
    });
  });

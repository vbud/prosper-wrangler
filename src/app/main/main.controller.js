'use strict';

angular.module('prosperWrangler')
  .controller('MainCtrl', function ($scope, prosper) {
    prosper.account().then( function(d) {
      $scope.account = d;
    });
    prosper.notes({'$top': 10}).then( function(d) {
      console.log(d);
      $scope.notes = d;
    })
  });

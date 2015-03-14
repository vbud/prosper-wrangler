'use strict';

angular.module('prosperWrangler')
  .controller('ListingsCtrl', function ($scope, ProsperSvc) {
    ProsperSvc.listings({'$top': 30}).then( function(d) {
      console.log(d);
      $scope.listings = d;
    })
  });

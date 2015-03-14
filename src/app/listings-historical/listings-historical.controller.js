'use strict';

angular.module('prosperWrangler')
  .controller('ListingsHistoricalCtrl', function ($scope, ProsperSvc) {
    ProsperSvc.listingsHistorical({'$top': 30}).then( function(d) {
      console.log(d);
      $scope.listings = d;
    })
  });

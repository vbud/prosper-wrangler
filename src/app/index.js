'use strict';

angular.module('prosperWrangler', ['ngSanitize', 'restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      })
      .state('notes', {
        url: '/notes',
        templateUrl: 'app/notes/notes.html',
        controller: 'NotesCtrl'
      })
      .state('investments', {
        url: '/investments',
        templateUrl: 'app/investments/investments.html',
        controller: 'InvestmentsCtrl'
      })
      .state('loans', {
        url: '/loans',
        templateUrl: 'app/loans/loans.html',
        controller: 'LoansCtrl'
      })
      .state('listings', {
        url: '/listings',
        templateUrl: 'app/listings/listings.html',
        controller: 'ListingsCtrl'
      })
      .state('listings-historical', {
        url: '/listings-historical',
        templateUrl: 'app/listings-historical/listings-historical.html',
        controller: 'ListingsHistoricalCtrl'
      })
      .state('account', {
        url: '/account',
        templateUrl: 'app/account/account.html',
        controller: 'AccountCtrl'
      })
      .state('data-dictionary', {
        url: '/data-dictionary',
        templateUrl: 'app/data-dictionary/data-dictionary.html',
        controller: 'DataDictionaryCtrl'
      });

    $urlRouterProvider.otherwise('/');
  });

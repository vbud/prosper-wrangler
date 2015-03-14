'use strict';

angular.module('prosperWrangler')
  .factory('ProsperSvc', function (Restangular) {
  	
  	var base = Restangular.allUrl('prosperApi', 'https://api.prosper.com/api/');

  	var account = function(queryParams) {
  		return base.get('Account', queryParams);
  	};
  	var dataDictionary = function(queryParams) {
			return base.get('DataDictionary', queryParams);
		};
  	var listings = function(queryParams) {
			return base.get('Listings', queryParams);
		};
		var listingsHistorical = function(queryParams) {
			return base.get('ListingsHistorical', queryParams);
		};
		var investments = function(queryParams) {
			return base.get('Investments', queryParams);
		};
		var notes = function(queryParams) {
			return base.get('Notes', queryParams);
		};
		var loans = function(queryParams) {
			return base.get('Loans', queryParams);
		};

  	return {
  		account: account,
  		dataDictionary: dataDictionary,
  		listings: listings,
  		listingsHistorical: listingsHistorical,
  		investments: investments,
  		notes: notes,
  		loans: loans
  	};

  });
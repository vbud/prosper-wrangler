'use strict';

angular.module('prosperWrangler')
  .controller('NavbarCtrl', function ($scope, $rootScope, $state) {

  	var setLinkStates = function() {
  		$scope.links.forEach( function(link) {
  			if( $state.is(link.state) )
  				link.active = true;
  			else
  				link.active = false;
  		});
  	}

  	var init = function() {

  		$scope.links = [
  			{
          name: 'Notes',
  				state: 'notes',
  				url: '#/notes'
  			},
  			{
  				name: 'Investments',
          state: 'investments',
  				url: '#/investments'
  			},
  			{
  				name: 'Loans',
          state: 'loans',
  				url: '#/loans'
  			},
  			{
  				name: 'Listings',
          state: 'listings',
  				url: '#/listings'
  			},
  			{
  				name: 'Listings Historical',
          state: 'listings-historical',
  				url: '#/listings-historical'
  			},
  			{
  				name: 'Account',
          state: 'account',
  				url: '#/account'
  			},
  			{
  				name: 'Data Dictionary',
          state: 'data-dictionary',
  				url: '#/data-dictionary'
  			}
  		];

  		setLinkStates();

  		$rootScope.$on('$stateChangeSuccess', function() {
  			setLinkStates();
  		});
  	};

    init();
    


  });

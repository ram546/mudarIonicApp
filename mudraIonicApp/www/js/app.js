angular.module('mudraApp', ['ionic', 'mudraApp.controllers', 'mudraApp.services', 'ionic-datepicker'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

	.state('myAccount', {
		url: '/myAccount',
		views: {
			'menuContent': {
				templateUrl: 'templates/myAccount.html',
				controller: 'myAccountCtrl'
			}
		}
	})

	.state('accounts', {
		url: '/accounts/:date',
		views: {
			'menuContent': {
				templateUrl: 'templates/accounts.html',
				controller: 'accountsCtrl'
			}
		}
	})

	.state('editAccount', {
		url: '/editAccount',
		views: {
			'menuContent': {
				templateUrl: 'templates/editAccount.html',
				controller: 'editAccountCtrl'
			}
		}
	})

	.state('eventAccounting', {
		url: '/eventAccounting',
		views: {
			'menuContent': {
				templateUrl: 'templates/eventAccounting.html',
				controller: 'eventAccountingCtrl'
			}
		}
	})

	.state('activities', {
		url: '/activities',
		views: {
			'menuContent': {
				templateUrl: 'templates/activities.html',
			}
		}
	})
	.state('transactionDetails', {
		url: '/transactionDetails/:id/:date',
		views: {
			'menuContent': {
				templateUrl: 'templates/transactionDetails.html',
				controller: 'transactionDetailsCtrl'
			}
		}
	});

	// $urlRouterProvider.otherwise('/app');
});

require.config({
	
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		marionette: {
			deps: [
				'underscore',
				'jquery',
				'backbone'
			],
			exports: 'Marionette'
		},
		'backbone.relational': {
			deps: ['backbone']
		},
	},

	paths: {
		'jquery': 					'./vendor/jquery/jquery',
		'rivets':					'./vendor/rivets/rivets',
		'underscore': 				'./vendor/underscore/underscore',
		'backbone': 				'./vendor/backbone/backbone',
		'marionette': 				'./vendor/backbone/backbone.marionette', 
		'backbone.wreqr':   		'./vendor/backbone/backbone.wreqr',
		'backbone.eventbinder':   	'./vendor/backbone/backbone.eventbinder',
		'backbone.babysitter':   	'./vendor/backbone/backbone.babysitter',
		'backbone.relational':		'./vendor/backbone/backbone.relational',
		'backbone.picky': 			'./vendor/backbone/backbone.picky',
		'text': 					'./vendor/require/require.text',
		'es5': 						'./vendor/es5-shim/es5-shim'
	}
});

require(['app/app'], function (app) {
	app.start();
})
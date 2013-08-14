define(function(require) {

	'use strict';
	
	var Backbone = require('backbone')
	  , Marionette = require('marionette')
	  , Drunkard = require('./data/drunkard')
	  , Bus = require('./bus')
	  , GameController = require('./controllers/game_controller')
	  ;

	var Router = Marionette.AppRouter.extend({
		appRoutes: {
			'*other': 'init'
		}
	})

	var app = new Marionette.Application();

	app.addRegions({
		gameRegion: '#game-region',
	})

	Bus.events.on('app:show:gameRegion', function(view) {
		app.gameRegion.show(view);
	})

	app.on('initialize:after', function() {
		Backbone.history.start();
	})

	app.addInitializer(function() {
		new Router({
			controller: GameController
		})
	});

	return app;
});
define(function(require) {

	var Marionette = require('marionette')
	  , GameLayoutTemplate = require('text!app/templates/game_layout_template.html')
	  ;

	var GameLayout = Marionette.Layout.extend({

		template: _.template(GameLayoutTemplate),

		regions: {
			playersRegion: '#players-region',
			cardsRegion: '#cards-region',
			controlRegion: '#control-region'
		}
		
	});

	return GameLayout;

});
define(function(require) {

	var Backbone = require('backbone');

	var PlayerModel = Backbone.Model.extend({
		defaults: {
			name: 'Игрок',
			deckSize: 0,
			pulledCard: {
				suit: '',
				name: '',
				weight: 0
			}
		},
	});

	var PlayersCollection = Backbone.Collection.extend({
		model: PlayerModel,
	});

	return PlayersCollection;

});
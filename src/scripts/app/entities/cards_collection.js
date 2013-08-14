define(function(require) {

	var Backbone = require('backbone');

	var CardModel = Backbone.Model.extend({
		defaults: {
			suit: '',
			name: '',
			weight: 0
		},
	});

	var CardsCollection = Backbone.Collection.extend({
		model: CardModel,
	});

	return CardsCollection;

});
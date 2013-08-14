define(function(require) {

	var _ = require('underscore');
	
	return {
		fullDeck: true,

		highСards: {
			11: 'J',
			12: 'Q',
			13: 'K',
			14: 'A'
		},

		suits: [
			'hearts',
			'diams',
			'clubs',
			'spades'
		],

		getCardsWeights: function () {
			return _.range(this.fullDeck ? 2 : 6, 15);
		},

		maxIterationCount: 5000
	}

});
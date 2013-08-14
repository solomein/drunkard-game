define(function(require) {

	var Config = require('./config');

	var cardsWeights = Config.getCardsWeights();

	var getCards = function (weights, suit) {
		return _.map(weights, function (weight) {
			return {
				suit: suit,
				weight: weight,
				name: weight in Config.highСards ? Config.highСards[weight] : weight
			}
		})
	}

	var getDeck = function() {
		var deck = [];

		_.each(Config.suits, function (suit) {
			deck = deck.concat(getCards(cardsWeights, suit))
		})

		return _.shuffle(deck);
	}

	var getChunkDeck = function(playersCount) {
		var result = []
		  , deck = getDeck()
		  , chunkSize = ~~(deck.length / playersCount)
		  ;

		for (var i = 0; i < deck.length; i += chunkSize) {
			result.push(deck.slice(i, i + chunkSize))	
		}

		return {
			cards: result,
			size: ~~(deck.length / playersCount) * playersCount
		}
	}

	return {
		getChunkDeck: getChunkDeck
	}

});
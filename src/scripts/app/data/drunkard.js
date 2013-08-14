define(function(require) {

	var Config = require('./config')
	  , Service = require('./cards_generate_service')
	  ;

	function Drunkard(playersCount) {
		this.playersCount = playersCount || 4;
		this.deck = Service.getChunkDeck(this.playersCount);
		this.losers = [];
		this.winners = [];
		this.pulledCards = [];
		this.presenter = this.initPresenter()
	}

	Drunkard.prototype = {
		initPresenter: function() {
			var result = [];
			for (var i = 0; i < this.playersCount; i++) {
				result[i] = {
					name: 'Игрок ' + i,
					deckSize: this.deck.cards[i].length,
					pulledCard: {}
				}
			}
			return result;
		},

		pullCards: function() {
			var belligerents = this.winners;

			var max = -1;

			for (var i = 0; i < this.playersCount; i++) {

				if ((belligerents.length && _.indexOf(belligerents, i) == -1) || _.indexOf(this.losers, i) != -1) continue;

				var currentPlayer = this.deck.cards[i];

				if (!currentPlayer.length) {
					this.presenter[i].pulledCard = {};
					this.losers.push(i);
					continue;
				}

				var cards = currentPlayer.splice(0, belligerents.length ? 2 : 1);		

				this.pulledCards = this.pulledCards.concat(cards);

				if (belligerents.length && cards.length < 2) continue;

				var card = _.last(cards);

				this.presenter[i].pulledCard = card;

				card.weight == max && this.winners.push(i);

				if(card.weight > max) {
					this.winners = [i];
					max = card.weight;
				}

			}
		},

		play: function(count) {
			count || (count = Config.maxIterationCount);
			for (var i = 0; i < count; i++) {
				this.pullCards();

				if(i === count - 1) {
					for (var j = 0; j < this.playersCount; j++) {
						this.presenter[j].deckSize = this.deck.cards[j].length
					}
				}

				if(this.winners.length === 1) {
					var winner = this.winners[0];

					Array.prototype.push.apply(this.deck.cards[winner], this.pulledCards.splice(0))
					
					if(this.deck.cards[winner].length === this.deck.size) {
						this.presenter = this.initPresenter()
						break;
					}

					this.winners.length = 0;
				}
			}
		}
	}

	return Drunkard;

});
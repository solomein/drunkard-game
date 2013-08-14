define(function(require) {

	var Marionette = require('marionette')
	  , PlayerItemViewTemplate = require('text!app/templates/player_item_view_template.html')
	  , Config = require('app/data/config')
	  ;

	var PlayerItemView = Marionette.ItemView.extend({

		template: _.template(PlayerItemViewTemplate),
        templateHelpers: {
            getCardClass: function () {
            	return this.deckSize ? 'card-back' : '';
            },            
            getSuit: function () {
            	switch(this.pulledCard.suit) {
            		case Config.suits[0]:
            			return '<span class="suit-red">&hearts;</span>'
            		case Config.suits[1]:
            			return '<span class="suit-red">&diams;</span>'
            		case Config.suits[2]:
            			return '<span class="suit-black">&clubs;</span>'
            		case Config.suits[3]:
            			return '<span class="suit-black">&spades;</span>'

            	}
            }
        }

	});

	var PlayersCollectionView = Marionette.CollectionView.extend({
        
        className: 'cards-container group',
		itemView: PlayerItemView
		
	});

	return PlayersCollectionView;

});
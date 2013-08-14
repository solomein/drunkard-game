define(function(require) {

	var Marionette = require('marionette')
	  , CardItemViewTemplate = require('text!app/templates/card_item_view_template.html')
	  , Config = require('app/data/config')
	  ;

	var CardItemView = Marionette.ItemView.extend({

		template: _.template(CardItemViewTemplate),
        templateHelpers: {
            getSuit: function () {
            	switch(this.suit) {
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
        },
        className: 'card'

	});

	var CardsCollectionView = Marionette.CollectionView.extend({

        className: 'cards-container group',
		itemView: CardItemView,

	});

	return CardsCollectionView;

});
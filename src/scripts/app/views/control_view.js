define(function(require) {

	var Marionette = require('marionette')
	  , ControlItemViewTemplate = require('text!app/templates/control_item_view_template.html')
	  , Config = require('app/data/config')
	  ;

	var ControlItemView = Marionette.ItemView.extend({

		template: _.template(ControlItemViewTemplate),

		triggers: {
			'click #control_play': 'control:play',
			'click #control_auto-play': 'control:autoPlay',
		},

		events: {
			'change #control_players-count': 'changePlayers',
			'click #control_new-game': 'newGame'
		},

		ui: {
			playersCount: '#control_players-count'
		},

		changePlayers: function(ev) {
			this.trigger('control:changePlayers', ev.currentTarget.value)
		},

		newGame: function(ev) {
			this.trigger('control:changePlayers', this.ui.playersCount.val())
		}

	});

	return ControlItemView;

});
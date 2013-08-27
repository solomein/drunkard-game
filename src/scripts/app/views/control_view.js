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
			'click #control_new-game': 'changePlayers',
			'change #control_debug': 'changeDebugMode'
		},

		ui: {
			playersCount: '#control_players-count',
			debug: '#control_debug'
		},

		onRender: function() {
			this.ui.debug.prop('checked', Config.debug);
		},

		changePlayers: function(ev) {
			this.trigger('control:changePlayers', this.ui.playersCount.val())
		},

		changeDebugMode: function(ev) {
			Config.debug = this.ui.debug.prop('checked');
		}

	});

	return ControlItemView;

});
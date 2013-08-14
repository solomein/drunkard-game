define(function(require) {

	var Backbone = require('backbone');

	var ControlModel = Backbone.Model.extend({
		defaults: {
			playersCounts: [2,3,4,5,6],
		},
	});

	return ControlModel;

});
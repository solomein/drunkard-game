define(function(require) {

  var PlayersView = require('app/views/players_view')
    , ControlView = require('app/views/control_view')
    , GameLayout = require('app/views/game_layout')
    , PlayersCollection = require('app/entities/players_collection')
    , ControlModel = require('app/entities/control_model')
    , Bus = require('app/bus')
    , Drunkard = require('app/data/drunkard')
    ;

  var drunkard = new Drunkard(2)
    , playersCollection = new PlayersCollection()
    ;

  var playersView = new PlayersView({ collection: playersCollection })
    , controlView = new ControlView({ model: new ControlModel })
    , gameLayout = new GameLayout()
    ;

  playersCollection.reset(drunkard.presenter)

  controlView.on('control:play', function () {
      drunkard.play(1)
      playersCollection.reset(drunkard.presenter)
  });

  controlView.on('control:autoPlay', function () {
      drunkard.play()
      playersCollection.reset(drunkard.presenter)
  });

  controlView.on('control:changePlayers', function (count) {
      drunkard = new Drunkard(count);
      playersCollection.reset(drunkard.presenter)
  });

  gameLayout.on('show', function () {
      gameLayout.playersRegion.show(playersView)
      gameLayout.controlRegion.show(controlView)
  });

  return {
      init: function() {
          Bus.events.trigger('app:show:gameRegion', gameLayout)
      }
  }

});
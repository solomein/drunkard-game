define(function(require) {

    var Config = require('./config');
    
    var isAvailable = 'console' in self && 'log' in console;

    var log = isAvailable ? Function.prototype.call.bind(console.log, console) : $.noop;

    return {
        log: function() {
            Config.debug && isAvailable && log.apply(console, arguments); 
        }
    }
});
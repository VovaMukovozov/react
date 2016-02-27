var guid = require('guid');
var listeners = {};

module.exports ={
    register: function(callback){
        var id = guid.raw();
        listeners[id] = callback;
        return id;
    },
    dispatch: function(payload){
        console.log("dispatching ...", payload);
        for(var id in listeners ){
            var listener = listeners[id];
            listener(payload);
        }

    }
};
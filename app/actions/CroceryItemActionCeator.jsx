var dispacher = require('../despachers/item_dispacher.js');

module.exports = {
    add:function(item){
        dispacher.dispatch({
            payload:item,
            type:"grocery-item:add"
        })
    },
    delete:function(item){
        dispacher.dispatch({
            payload:item,
            type:"grocery-item:delete"
        })
    },
    buy:function(item){
        dispacher.dispatch({
            payload:item,
            type:"grocery-item:buy"
        })
    },
    unbuy:function(item){
        dispacher.dispatch({
            payload:item,
            type:"grocery-item:unbuy"
        })
    }
}
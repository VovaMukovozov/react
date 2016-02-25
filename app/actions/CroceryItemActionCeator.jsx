var React = require('react');
var dispacher = require('../dispacher.js');

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
    }
}
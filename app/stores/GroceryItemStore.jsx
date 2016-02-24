var dispacher = require('../dispacher.js');

function GroceryItemStore(){
    var items = [{
        name: "Ice Cream"
    },{
        name: "Waffles"
    },{
        name: "Candy",
        purchased: true
    },{
        name: "Sharks"
    }];
    var listeners = [];

    function getItems(){
        return items;
    }

    function onChange(listener){
        listeners.push(listener);
    }

    function triggerListeners(){
        listeners.forEach(function(listener){
            listener(items);
        });
    }
    function addGroceryitem(item){
        items.push(item);
        triggerListeners();
    }

    dispacher.register(function(event){
        var split = event.type.split(":");
        if(split[0] === 'grocery-item'){
            switch (split[1]){
                case "add":
                    addGroceryitem(event.payload);
                    break;
            }
        }
    })

    return {
        getItems:getItems,
        onChange:onChange
    }

}

module.exports = new GroceryItemStore();
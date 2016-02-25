var React = require('react');
var ReactDom = require('react-dom');

console.log('Hello iam JSX file! ');

var GroceryItemList = require('./components/GroceryItem/GroceryItemList.jsx');

var GroceryItemStore = require('./stores/GroceryItemStore.jsx');

var initial = GroceryItemStore.getItems();


function render(){
    ReactDom.render(<GroceryItemList items={initial}/>, app);
}

GroceryItemStore.onChange(function(items){
    initial = items;
    render();
});

render();
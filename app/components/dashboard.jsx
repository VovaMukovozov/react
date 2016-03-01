var React = require('react'),
    auth = require('../services/auth.js');

var GroceryItemStore = require('../stores/GroceryItemStore.jsx');
var GroceryItemList = require('../components/GroceryItem/GroceryItemList.jsx');
var initial = GroceryItemStore.getItems();

var Dashboard = React.createClass({

    render: function () {
        console.log('rendering');
        return (
            <GroceryItemList items={initial}/>
        );
    },
    componentDidMount: function () {
        GroceryItemStore.onChange(function(items){
            initial = items;
            this.setState({ items: initial });
        }.bind(this));
    }

});

module.exports = Dashboard;
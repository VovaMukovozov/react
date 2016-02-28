var React = require('react'),
    auth = require('../services/auth.js');

var GroceryItemStore = require('../stores/GroceryItemStore.jsx');
var GroceryItemList = require('../components/GroceryItem/GroceryItemList.jsx');
var initial = GroceryItemStore.getItems();

var Dashboard = React.createClass({

  mixins: [ Authentication ],

  render: function () {

      GroceryItemStore.onChange(function(items){
          initial = items;
          <GroceryItemList items={initial}/>
      });

      return (
          <GroceryItemList items={initial}/>
      );
  }
});

module.exports = Dashboard;
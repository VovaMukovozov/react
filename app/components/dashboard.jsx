var React = require('react'),
    auth = require('../services/auth.js');
var GroceryItemStore = require('../stores/GroceryItemStore.jsx');
var GroceryItemList = require('../components/GroceryItem/GroceryItemList.jsx');
var initial = [];

var Dashboard = React.createClass({

    render: function () {
        return (
            <GroceryItemList items={initial}/>
        );
    },


    componentDidMount: function () {

    fetch( 'http://localhost:8080/notes', {
                method: 'get',
                headers: {
                          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Niwia2V5cyI6IkEiLCJzZWNyZXQiOiJNVDJMcTM5YUcsRTRVOXc9NCNDWW9mZnJKKks4KzN6KHhkUFljO2RaZ1Fwb1hHVCg4W0AxMyQlZGpsekA9QnYifQ.pBkIe3VYOqFcOrc7kQg-rBYVcL7RbSekiST1Zz09E6E"
                          },
        })
        .then(function (data) {
            console.log('Request succeeded with JSON response', data);
            })
  .catch(function (error) {
    console.log('Request failed', error);
  });
        GroceryItemStore.onChange(function(items){
            initial = items;
            this.setState({ items: initial });
        }.bind(this));
    }

});

module.exports = Dashboard;

var React = require('react'),
    Router = require('react-router'),
    Authentication = require('../mixins/authentication.js'),
    browserHistory = Router.hashHistory,
    auth = require('../services/auth.js');

var Dashboard = React.createClass({

  mixins: [ Authentication ],

  render: function () {

      if(!auth.loggedIn()){
          browserHistory.push('/login')
      }

    var token = auth.getToken();
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>Token: {token}</p>
      </div>
    );
  }
});

module.exports = Dashboard;
var React = require('react'),
    Router = require('react-router'),
    auth = require('../services/auth.js'),
    Link = Router.Link;

var App = React.createClass({

  getInitialState: function () {
    return {
      loggedIn: auth.loggedIn()
    };
  },

  setStateOnAuth: function (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },

  componentWillMount: function () {
    auth.onChange = this.setStateOnAuth;
    auth.login();
  },

  render: function () {
    var loginOrOut = this.state.loggedIn ? <Link to="logout">Log out</Link> : <Link to="login">Sign in</Link>,
        register = (!this.state.loggedIn) ? <li><Link to="register">Sign up</Link></li> : '',
        dashboard = this.state.loggedIn ? <li><Link to="dashboard">Dashboard</Link></li> : '';
    return (
      <div>
        <ul>
          <li>{loginOrOut}</li>
          {register}
          {dashboard}
        </ul>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;

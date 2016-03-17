var React = require('react'),
    Router = require('react-router'),
    InputForm = require('./../General/FormInput.jsx'),
    BrowserHistory = Router.hashHistory,
    auth = require('../../services/auth.js'),
    redirectWhenLoggedIn = require('../../mixins/redirect_when_logged_in');

var Login = React.createClass({

  mixins: [ Router.Navigation, redirectWhenLoggedIn ],

  statics: {
    attemptedTransition: null
  },

  getInitialState: function () {
    return {
      error: false,
      canSubmit: false
    };
  },

  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },
  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },

  submit: function (data) {
    auth.login(data.email, data.password, function (loggedIn) {

    fetch('http://localhost:8080/users/login', {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: 'email=vova.mukovozov@sergata.com&password=123456789'
  })
  .then(function (data) {
    console.log('Request succeeded with JSON response', data);
  })
  .catch(function (error) {
    console.log('Request failed', error);
  });
      if (!loggedIn)
        return this.setState({ error: true });
      if (Login.attemptedTransition) {
        var transition = Login.attemptedTransition;
        Login.attemptedTransition = null;
        transition.retry();
      } else {
        BrowserHistory.push('/dashboard')
      }
    }.bind(this));
  },

  render: function () {
    var loginError = this.state.error ? <p>Bad login information</p> : '';

    return (
        <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <InputForm name="email" title="Email" inputClassName="u-full-width" validations="isEmail" validationError="This is not a valid email" required/>
          <InputForm name="password" title="Password" type="password" inputClassName="u-full-width" validations="minLength:8" validationError="This is not a valid password" required/>
          <button type="submit" disabled={!this.state.canSubmit} className="button-primary" >LogIn</button>
          {loginError}
        </Formsy.Form>
    );
  }
});

module.exports = Login;

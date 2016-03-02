var React = require('react'),
    Router = require('react-router'),
    InputForm = require('./FormInput.jsx'),
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
          <button type="submit" disabled={!this.state.canSubmit} className="button-primary" >Register</button>
          {loginError}
        </Formsy.Form>
    );
  }
});

module.exports = Login;
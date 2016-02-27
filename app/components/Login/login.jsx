var React = require('react'),
    Router = require('react-router'),
    auth = require('../../services/auth.js'),
    browserHistory = Router.hashHistory,
    RedirectWhenLoggedIn = require('../../mixins/redirect_when_logged_in');

var Login = React.createClass({

  mixins: [ Router.Navigation, RedirectWhenLoggedIn ],

  statics: {
    attemptedTransition: null
  },

  getInitialState: function () {
    return {
      error: false,
      state : {
        user: "",
        password:""
      }
    };
  },

  handleInputEmail: function(e){
    this.setState({
      user: e.target.value
    });
  },

  handleInputPassword: function(e){
    this.setState({
      password: e.target.value
    });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var email = this.state.user;
    var pass = this.state.password;
    auth.login(email, pass, function (loggedIn) {
      if (!loggedIn)
        return this.setState({ error: true });
      if (Login.attemptedTransition) {
        var transition = Login.attemptedTransition;
        Login.attemptedTransition = null;
        transition.retry();
      } else {
        browserHistory.push('/dashboard')
      }
    }.bind(this));
  },

  render: function () {
    var errors = this.state.error ? <p>Bad login information</p> : '';
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="six columns">
            <label for="exampleEmailInput">Your email</label>
            <input
                className="u-full-width"
                type="email"
                placeholder="test@mailbox.com"
                id="exampleEmailInput"
                defaultValue={this.state.user}
                onChange={this.handleInputEmail}
            />
          </div>
        </div>



        <div className="row">
          <div className="six columns">
            <label for="examplePasswordInput">Password</label>
            <input
                className="u-full-width"
                type="password"
                placeholder="password"
                id="examplePasswordInput"
                defaultValue={this.state.password}
                onChange={this.handleInputPassword}
            />
          </div>
        </div>
        <button className="button-primary"> LogIn </button>
        {errors}
      </form>
    );
  }
});

module.exports = Login;
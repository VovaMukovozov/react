var React = require('react'),
    Router = require('react-router'),
    auth = require('../../services/auth.js'),
    browserHistory = Router.hashHistory,
    RedirectWhenLoggedIn = require('../../mixins/redirect_when_logged_in');


var Register = React.createClass({

    mixins: [ Router.Navigation, RedirectWhenLoggedIn ],

    statics: {
        attemptedTransition: null
    },

    getInitialState: function () {
        return {
            error: false,
            state : {
                email: "",
                username: "",
                password:"",
                confirmPassword:""
            }
        };
    },

    handleChange: function(field, e) {
        var nextState = {};
        nextState[field] = e.target.value;
        this.setState(nextState)
    },

    handleSubmit: function (event) {
        event.preventDefault();
        var email = this.state.email;
        var pass = this.state.password;
        var ConfirmPass = this.state.confirmPassword;
        var username = this.state.username;
        if(ConfirmPass !== pass) {
            return this.setState({ error: true });
        }
        auth.login(email, pass, function (loggedIn) {
            if (!loggedIn)
                return this.setState({ error: true });
            if (Register.attemptedTransition) {
                var transition = Login.attemptedTransition;
                Register.attemptedTransition = null;
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
                        <label for="exampleEmailInput">Your username</label>
                        <input
                            className="u-full-width"
                            type="text"
                            placeholder="username"
                            id="exampleUsernameInput"
                            defaultValue={this.state.username}
                            onChange={this.handleChange.bind(this, 'username')}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="six columns">
                        <label for="exampleEmailInput">Your email</label>
                        <input
                            className="u-full-width"
                            type="email"
                            placeholder="test@mailbox.com"
                            id="exampleEmailInput"
                            defaultValue={this.state.email}
                            onChange={this.handleChange.bind(this, 'email')}
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
                            onChange={this.handleChange.bind(this, 'password')}
                        />
                    </div>
                </div>


                <div className="row">
                    <div className="six columns">
                        <label for="examplePasswordInput">Confirm Password</label>
                        <input
                            className="u-full-width"
                            type="password"
                            placeholder="confirm password"
                            id="exampleConfirmPasswordInput"
                            defaultValue={this.state.confirmPassword}
                            onChange={this.handleChange.bind(this, 'confirmPassword')}
                        />
                    </div>
                </div>
                <button className="button-primary"> Register </button>
                {errors}
            </form>
        );
    }
});

module.exports = Register;
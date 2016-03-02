var React = require('react'),
    Router = require('react-router'),
    InputForm = require('./../General/FormInput.jsx'),
    BrowserHistory = Router.hashHistory,
    auth = require('../../services/auth.js'),
    redirectWhenLoggedIn = require('../../mixins/redirect_when_logged_in');


var Register = React.createClass({

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
            if (Register.attemptedTransition) {
                var transition = Register.attemptedTransition;
                Register.attemptedTransition = null;
                transition.retry();
            } else {
                BrowserHistory.push('/dashboard')
            }
        }.bind(this));
    },

    render: function () {
        return (
            <Formsy.Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <InputForm name="username" title="Username" inputClassName="u-full-width" validations="isExisty" validationError="This is not a valid username" required/>
                <InputForm name="email" title="Email" inputClassName="u-full-width" validations="isEmail" validationError="This is not a valid email" required/>
                <InputForm name="password" title="Password" type="password" inputClassName="u-full-width" validations="minLength:8" validationError="This is not a valid password" required/>
                <InputForm name="repeated_password" title="Confirm password" type="password" inputClassName="u-full-width" validations="equalsField:password" validationError="This is not a valid password" required/>
                <button type="submit" disabled={!this.state.canSubmit} className="button-primary" >Register</button>
            </Formsy.Form>
        );
    }
});

module.exports = Register;
var auth = require('../services/auth.js'),
    Login = require('./Login.jsx');

var Authentication = {
  statics: {
    willTransitionTo: function (transition) {
      if (!auth.loggedIn()) {
        Login.attemptedTransition = transition;
        transition.redirect('/Login');
      }
    }
  }
};

module.exports = Authentication;
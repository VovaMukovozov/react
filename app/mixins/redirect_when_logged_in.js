var auth = require('../services/auth.js');

var redirectWhenLoggedIn = {
  statics: {
    willTransitionTo: function (transition) {
      if ( auth.loggedIn()) {
        transition.redirect('/dashboard');
      }
    }
  }
};

module.exports = redirectWhenLoggedIn;
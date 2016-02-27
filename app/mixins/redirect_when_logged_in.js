var auth = require('../services/auth.js');

var RedirectWhenLoggedIn = {
  statics: {
    willTransitionTo: function (transition) {
      if ( auth.loggedIn()) {
        transition.redirect('/dashboard');
      }
    }
  }
};

module.exports = RedirectWhenLoggedIn;
var React = require('react'),
    redirectWhenLoggedIn = require('../mixins/redirect_when_logged_in.js');

var Home = React.createClass({

  mixins: [redirectWhenLoggedIn],

  render: function () {
    return (
      <div>
        Home
      </div>
    );
  }

});

module.exports = Home;

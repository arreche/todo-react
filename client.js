var React = require('react');
var Router = require('react-router');
var routes = require('./app/routes');

require('./app/styles');

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});

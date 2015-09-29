var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route path="/" handler={require('./app')}>
    <DefaultRoute path="/todos" handler={require('./todos')} />
    <Route path="/todos" handler={require('./todos')} />
    <Route path="/todos/:id" handler={require('./todo')} />
  </Route>
);

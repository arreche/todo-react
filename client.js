var React = require ('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./app/app.jsx');
var Todos = require('./app/todos.jsx');
var Todo = require('./app/todo.jsx');

require('./app/styles.sass');

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Todos} />
    <Route name="todo" path="todo" handler={Todo}></Route>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});

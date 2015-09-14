var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var data = require('./data');

module.exports = React.createClass({
  getInitialState: function() {
    return {todos: data.todos, todo: data.todo};
  },
  render: function() {
    return (
      <div className="TodoApp">
        <h1>TodoApp</h1>
        <RouteHandler {...this.state} />
      </div>
    );
  }
});

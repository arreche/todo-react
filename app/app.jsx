var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
  render: function() {
    return (
      <div className="TodoApp">
        <h1>TodoApp</h1>
        <RouteHandler {...this.state} />
      </div>
    );
  }
});

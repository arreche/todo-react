var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    var self = this;
    return (
      <div>
        <h2>Todos</h2>
        <ul>
          {this.props.todos.map(function(data, i) {
            return (
              <li key={i} onClick={self.props.onSelect}>
                <Link to={`/todo`}>{data.todoName}</Link>
              </li>
              )
          })}
        </ul>
      </div>
    )
  }
});

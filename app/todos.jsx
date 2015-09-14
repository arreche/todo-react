var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired,
  },
  render: function() {
    var self = this;
    return (
      <div>
        <h2>Todos</h2>
        <ul>
          {this.props.todos.map(function(todo, i) {
            return (
              <li key={i}>
                <Link to={`/todos/${todo._id}`}>{todo.todoName}</Link>
              </li>
              )
          })}
        </ul>
      </div>
    )
  }
});

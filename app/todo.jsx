var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    var self = this;
    return (
      <div>
        <h2>Todo: {self.props.todo.todoList.todoName}</h2>
        <ul>
          {this.props.todo.tasks.map(function(task, i) {
            return (
              <li key={i} onClick={self.props.onSelect}>
                {task.taskName}
              </li>
              )
          })}
        </ul>
        <Link to={`/`}>Back to todos</Link>
      </div>
    )
  }
});

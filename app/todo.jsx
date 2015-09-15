var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var TodoStore = require('./todoStore');
var Actions = require('./actions');

module.exports = React.createClass({
  propTypes: {
    todo: React.PropTypes.array.isRequired,
    onSelect: React.PropTypes.func.isRequired,
  },
  getInitialState: function() {
    return {todo: TodoStore.getTodo()};
  },
  componentWillMount: function() {
    TodoStore.addChangeListener(this._onChange);

    Actions.fetchTodo();
  },
  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({todo: TodoStore.getTodo()});
  },
  render: function() {
    var self = this;
    return (
      <div>
        <h2>Todo: {self.state.todo.todoList.todoName}</h2>
        <ul>
          {this.state.todo.tasks.map(function(task, i) {
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

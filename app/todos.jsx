var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var TodosStore = require('./todosStore');
var Actions = require('./actions');

module.exports = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired,
  },
  getInitialState: function() {
    return {todos: TodosStore.getTodos()};
  },
  componentWillMount: function() {
    TodosStore.addChangeListener(this._onChange);

    Actions.fetchTodos();
  },
  componentWillUnmount: function() {
    TodosStore.removeChangeListener(this._onChange);
  },
  _onChange: function() {
    this.setState({todos: TodosStore.getTodos()});
  },
  render: function() {
    var self = this;
    return (
      <div>
        <h2>Todos</h2>
        <ul>
          {this.state.todos.map(function(todo, i) {
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

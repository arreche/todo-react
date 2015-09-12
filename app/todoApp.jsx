var React = require('react');

var Todos = require('./todos.jsx');
var Todo = require('./todo.jsx');

var data = require('./data.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      page: <Todos data={data.todos} onSelect={this.goToItem} />
    };
  },
  goToMain: function() {
    this.setState({page: <Todos data={data.todos} onSelect={this.goToItem} />});
  },
  goToItem: function() {
    this.setState({page: <Todo data={data.todo} onSelect={this.toggleItem} />});
  }, 
  toggleItem: function(e) {
    console.log(e.key);
  },
  render: function() {
    return (
      <div className="TodoApp">
        <h1 onClick={this.goToMain}>TodoApp</h1>
        {this.state.page}
      </div>
    );
  }
});

var React = require('react');

var Todos = require('./todos.jsx');
var Todo = require('./todo.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      page: <Todos data={this.props.todos}
                   onSelect={this.goToItem} />
    };
  },
  goToMain: function() {
    this.setState({page: <Todos data={this.props.todos}
                                onSelect={this.goToItem} />});
  },
  goToItem: function() {
    this.setState({page: <Todo data={this.props.todo}
                               onSelect={this.toggleItem}
                               addItem={this.addItem} />});
  }, 
  addItem: function(item) {
    this.props.todos.push({taskName: item});

    // TODO: Update state
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

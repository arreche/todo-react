var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {input: ""};
  },
  handleOnChange: function(e) {
    this.setState({input: e.target.value});
  },
  addItem: function(e) {
    e.preventDefault();

    this.props.addItem(this.state.input);

    this.setState({input: ""});
  },
  render: function() {
    return (
        <div className="add">
          <form onSubmit={this.addItem}>
            <input onChange={this.state.input}/>
            <button>Add</button> 
          </form>
        </div>
    );
  }  
});

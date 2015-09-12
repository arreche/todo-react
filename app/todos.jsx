var React = require('react');

module.exports = React.createClass({
  render: function() {
    var self = this;
    return (
      <ul>
        {this.props.data.map(function(data, i) {
          return (<li key={i} onClick={self.props.onSelect}>{data.todoName}</li>)
        })}
      </ul>
    )
  }
});

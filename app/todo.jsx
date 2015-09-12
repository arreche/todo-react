var React = require('react');

var AddItem = require('./addItem.jsx');

module.exports = React.createClass({
  render: function() {
    var self = this;
    return (
      <div>
        <AddItem addItem={this.props.addItem} />
        <ul>
          {this.props.data.tasks.map(function(data, i) {
            return (<li className={data.done? 'done' : ''} key={i} onClick={self.props.onSelect}>{data.taskName}</li>)
          })}
        </ul>
      </div>
    )
  }
});

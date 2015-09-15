var Dispatcher = require('./dispatcher');
var constants = require('./constants');
var actions = require('./actions');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var _todo = [];

var TodoStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(constants.CHANGE, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(constants.CHANGE, callback);
  },
  emitChange: function() {
    this.emit(constants.CHANGE);
  },
  getTodo: function() {
    return _todo;
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case constants.FETCH_TODO:
      _todo = action.data;

    TodoStore.emitChange();
    break;
    default:
      console.log("Unknown action", action);
  }
});

module.exports = TodoStore;

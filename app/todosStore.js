var Dispatcher = require('./dispatcher');
var constants = require('./constants');
var actions = require('./actions');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var _todos = [];

var TodosStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(constants.CHANGE, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(constants.CHANGE, callback);
  },
  emitChange: function() {
    this.emit(constants.CHANGE);
  },
  getTodos: function() {
    return _todos;
  }
});

Dispatcher.register(function(action) {
  switch(action.actionType) {
    case constants.FETCH_TODOS:
      _todos = action.data;

    TodosStore.emitChange();
    break;
    default:
      console.log("Unknown action", action);
  }
});

module.exports = TodosStore;

var dispatcher = require('./dispatcher');
var constants = require('./constants');

var data = require('./data'); // TODO: Replace by API client/service

module.exports = {
  fetchTodos: function() {
    // TODO: Do API calls
    dispatcher.dispatch({
      actionType: constants.FETCH_TODOS,
      data: data.todos
    });
  },
  fetchTodo: function(id) {
    // TODO: Do API calls
    dispatcher.dispatch({
      actionType: constants.FETCH_TODO,
      data: data.todo
    });	
  }
};

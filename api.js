var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// Mongoose Schemas
var Schema = mongoose.Schema;
var ObjectId =  Schema.ObjectId;

// Todo Lists
var todoSchema = new Schema({
  todoName : String
});
var todoList   = mongoose.model('todolist', todoSchema);

// Tasks
var taskSchema = new Schema({
  todoId : { type : ObjectId, ref : 'todolist'},
  taskName : String,
  taskDescription : String,
  taskDeadline : Date
});
var task   = mongoose.model('task', taskSchema);

router.get('/', function(req, res, next) {
  var titleString  =  "TodoAPI"
  res.render('api', { title: titleString});
});

//create a todo list
router.put('/todo', function(req, res, next) {
  //default values
  var todoName = req.body.todoName || "Todo List";
  var newTodoList = new todoList({
    "todoName": todoName,
  });
  createDocument(newTodoList, res);
});


//read todo lists
router.get('/todo', function(req, res, next) {
  //todoList can be augmented later to find specific todo lists
  getDocuments(todoList, res);
});

//create a task
router.put('/tasks', function(req, res, next) {
  //default values
  var todoId = req.body.todoId || "55eb4c3917c958681568bb9d";
  var taskName = req.body.taskName || "Task";
  var taskDescription = req.body.taskDescription || "";
  var taskDeadline = req.body.taskDeadline || undefined;


  var newTask = new task({
    "todoId" : todoId,
    "taskName" : taskName,
    "taskDescription" : taskDescription,
    "taskDeadline" : taskDeadline
  });
  createDocument(newTask, res);
});
//read tasks
router.get('/tasks', function(req, res, next) {
  //task can be augmented later to find specific tasks
  getDocuments(task, res);
});

//read tasks from a specific list
router.get('/tasks/:todoListId', function(req, res, next) {
  
  getDocuments(task, res);
});

var createDocument = function(spec, res) {
  spec.save(function(err, doc){
    if(err){
      res.send(err.message);
    } else {
      res.send(JSON.stringify(doc))
    }
  });
};
var getDocuments = function(spec, res) {
  spec.find(function(err, doc){
    if(err){
      res.send(err.message);
    } else {
      res.send(doc)
    }
  });
};


module.exports = router;

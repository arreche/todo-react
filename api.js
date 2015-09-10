var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

// Mongoose Schemas
var Schema = mongoose.Schema;
var ObjectId =  Schema.ObjectId;

// Todo List Schema
var todoSchema = new Schema({
  todoName : String
});
var todoList   = mongoose.model('todolist', todoSchema);

// Task Schema
var taskSchema = new Schema({
  todoId : { type : ObjectId, ref : 'todolist'},
  taskName : String,
  taskDescription : String,
  taskDeadline : Date
});
var task   = mongoose.model('task', taskSchema);

//Define url parameters
router.param('todoListId', function (req, res, next, id) {
  next();
});
router.param('taskId', function (req, res, next, id) {
  next();
});

router.get('/', function(req, res, next) {
  var titleString  =  "TodoAPI"
  res.render('api', { title: titleString});
});

//read all todo lists (will probably be removed or replaced with user-specific todo lists)
router.get('/todo/', function(req, res) {
  getDocuments(res, todoList);
});

//create a new todo list
router.put('/todo/', function(req, res, next) {
  console.log("creating todo list")
  var todoName = req.body.todoName || "Todo List";
  var newTodoList = new todoList({
    "todoName" : todoName
  });
  createDocument(res, newTodoList);
});

//Get a todo list and get its associated tasks
router.get('/todo/:todoListId', function(req, res, next) {
  todoListId = req.params.todoListId;
  todoList.findOne({'_id': todoListId})
  .then(
    function(doc){
      task.find({'todoId': todoListId}) // maybe there's a better way to do this? I'm not
      .then(
        function(doc2){
          var responseObject = {};
          responseObject.todoList = doc;
          responseObject.tasks = doc2;
          res.send(responseObject);
        },
        function(err2){
          res.send(err2.message);
        }
      )
    },
    function(err){
      res.send(err.message)
    }
  );
});

//create a task associated with the todo list in the URL
router.put('/todo/:todoListId/task', function(req, res, next) {
  //default values
  var todoListId = req.params.todoListId.toString();
  todoList.count({"_id": todoListId}).then(
    function(count){
      if(count === 1){
        var taskName = req.body.taskName || "Task";
        var taskDescription = req.body.taskDescription || "";
        var taskDeadline = req.body.taskDeadline || undefined;
        // enter values into the task
        var newTask = new task({
          "todoId" : todoListId,
          "taskName" : taskName,
          "taskDescription" : taskDescription,
          "taskDeadline" : taskDeadline
        });
        //create the task
        createDocument(res, newTask);
      } else {
        err = new Error()
        err.status  = 500;
        err.message = "Invalid todoListId in URL.";
        next(err);
      }
    },
    function(err){
      res.send(err.message);
    }
  );
});


//update a todo list's details
router.post('/todo/:todoListId', function(req, res, next) {
  var todoListId = req.params.todoListId.toString();
  var query     = { '_id' : todoListId };
  todoList.count(query)
  .then(
    function(count){
      if(count === 1){
        todoList.findOne(query)
        .then(
          function(doc){
            doc.todoName = req.body.todoName || doc.todoName;
            doc.save();
            res.send(doc);
          },
          function(err){
            res.send(err.message);
          }
        );
      } else {
        err = new Error()
        err.status  = 500;
        err.message = "Invalid todoListId in URL.";
        next(err);
      }
    },
    function(err){
      res.send(err.message);
    }
    );
});

// update a task within a specified todo list
router.post('/todo/:todoListId/task/:taskId', function(req, res, next) {
  var todoListId  = req.params.todoListId;
  todoList.count({ '_id' : todoListId })
  .then(
    function(count){
      if(count === 1){

        var taskId      = req.params.taskId;
        var query       = {};
        query._id       = taskId;
        query.todoId    = todoListId;
        task.findOne(query)
        .then(
          function(doc){
            doc.taskName        = req.body.taskName || doc.taskName;
            doc.taskDescription = req.body.taskDescription || doc.taskDescription;
            doc.taskDeadline    = req.body.taskDeadline || doc.taskDeadline;
            doc.save();
            res.send(doc);
          },
          function(err){
            res.send(err.message);
          }
        );
      } else {
        err = new Error()
        err.status  = 500;
        err.message = "Invalid todoListId in URL.";
        next(err);
      }
    },
    function(err){
      res.send(err.message);
    }
  );


});

// Delete task(s) within a specified todo list
router.delete('/todo/:todoListId/task', function(req, res, next) {
  //default values
  var todoListId  = req.params.todoListId;
  //construct the query depending on whether req.body.deleteIdArray is actually an Array, or a String.
  var query = {};
  if(typeof req.body.deleteIdArray === "object") {
    var deleteIds   = [];
    for(taskId in req.body.deleteIdArray){
       deleteIds.push(req.body.deleteIdArray[taskId].toString());
    }
    query._id = {};
    query._id.$in = deleteIds;
  } else {
    query._id = req.body.deleteIdArray.toString();
  }
  query.todoId = todoListId;
  console.log(query)
  task.remove(query)
  .then(function(doc){
      res.send(doc);
  })
  .catch(function(err){
    res.send(err.message);
  });
});

//delete a todo list and all tasks associated with it.
router.delete('/todo/:todoListId/delete', function(req, res, next) {
  deleteId = req.params.todoListId;
  var todoQuery = {};
  todoQuery._id = deleteId;
  var taskQuery = {}
  taskQuery.todoId = deleteId;

  var responseObject = [];
  todoList.remove(todoQuery)
  .then(function(doc){
    responseObject.push(doc);
  })
  .catch(function(err){
    responseObject.push(err.message);
  })

  task.remove(taskQuery)
  .then(function(doc){
    responseObject.push(doc);
  })
  .catch(function(err){
    responseObject.push(err.message);
  })

  res.send(responseObject);

});

var createDocument = function(res, model) {
  model.save(function(err, doc){
    if(err){
      res.send(err.message);
    } else {
      res.send(JSON.stringify(doc))
    }
  });
};
var getDocuments = function(res, model, query) {
  //res : the response object from router.get. Necessary so that the function can respond to the request.
  //model : the mongoose.model that you are searching for
  //query : (optional) a query object for the model that you're searching
  findQuery = query || {};
  model.find(findQuery, function(err, doc){
    if(err){
      res.send(err.message);
    } else {
      res.send(doc);
    }
  });
};



module.exports = router;

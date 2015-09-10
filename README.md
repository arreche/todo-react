# API Documentation

Any problems, please feel free to ping Jafit on Slack.

### Database

The Mongodb database connection is implemented, so all information stored is persistant. Please ensure that mongod is running, otherwise it won't work.

* * *

### Create Records - HTTP PUT REQUEST

#### /api/todo/

Creates a new todo list.

**Parameters - Passed via URL and x-www-form-urlencoded**

*   **todoName** - _String_ - Specifies the name of the Todo List. If not present; defaults to "Todo List".

#### /api/todo/<todoListId>/task

Create a task within the todolist specified by <todoListId>.

**Parameters - Passed via URL and x-www-form-urlencoded**

*   **<todoListId>** : _String passed via URL_ - Mongo _id string specifying which Todo List you want to add a task to.
*   **taskName** : _String_ - Specifies the name of the task that you are creating. If not present; defaults to "Task".
*   **taskDescription** : _String_ - The description of the task that you are creating. If not present; defaults to empty string.
*   **taskDeadline** : _Date_ - A [RCF-822](http://www.w3.org/Protocols/rfc822/) formatted date string representing the time that the deadline of the task. If not present; defaults to _undefined_.

* * *

### Read Records - HTTP GET REQUEST

#### /api/todo/

Read all todo lists, may be changed to become user-specific todo lists later.

Returns an Array containing objects that represent.

**Sample output returning 2 Todo Lists:**

<pre>[
  {
    "_id": "55f0b07cdeb89e640a5f101b",
    "todoName": "Test Todo List",
    "__v": 0
  },
  {
    "_id": "55f0b268deb89e640a5f101d",
    "todoName": "Another Test Todo List",
    "__v": 0
  }
]  </pre>

*   **"_id"** : MongoDB unique id string for all documents
*   **"todoName"** : A string representing the name of the Todo List
*   **"__v"** : Version number property automatically added by Mongoose

#### /api/todo/<todoListId>

Retrieve a todo list and its associated tasks.

**Parameters - Passed via URL only**

*   **<todoListId>** - _String passed via URL_ - Mongo _id string specifying which Todo List you want to retrieve.

Returns an object containing two values, todoList contains the details of the Todo List itself, while tasks contains an array which contains all of the Tasks.

**Sample output of a Todo List with 3 Tasks:**

<pre>{
  "todoList": {
    "_id": "55f0b07cdeb89e640a5f101b",
    "todoName": "Test Todo List",
    "__v": 0
  },
  "tasks": [
    {
      "_id": "55f0b41fdeb89e640a5f101e",
      "todoId": "55f0b07cdeb89e640a5f101b",
      "taskName": "Test  the API",
      "taskDescription": "Run a bunch of tests to make sure that the API works",
      "taskDeadline": "2015-09-09T12:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "55f0b44cdeb89e640a5f101f",
      "todoId": "55f0b07cdeb89e640a5f101b",
      "taskName": "Fix the bugs",
      "taskDescription": "Now that we've established that its broken, you need to fix it.",
      "taskDeadline": "2015-09-09T16:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "55f0b467deb89e640a5f1020",
      "todoId": "55f0b07cdeb89e640a5f101b",
      "taskName": "Document the API",
      "taskDescription": "If it works, you need to make sure that people know how to use it",
      "taskDeadline": "2015-09-09T18:00:00.000Z",
      "__v": 0
    }
  ]
}</pre>

*   **"todoList"** : An object containing the details of the Todo List
    *   **"_id"** : MongoDB unique id string for all documents
    *   **"todoName"** : A string representing the name of the Todo List
    *   **"__v"** : Version number property automatically added by Mongoose
*   **"tasks"** : an array containing the objects representing the tasks in the todo list
    *   **"_id"** : MongoDB unique id string for all documents
    *   **"todoId"** : A reference to the MongoDB unique Id string of the Todo List that this task belongs to... There might be a better way to do this with populate() but I couldn't figure it out.
    *   **"taskName"** : A string representing name of the task
    *   **"taskDescription"** : A string representing a description of the task
    *   **"taskDeadline"** : a [RCF-822](http://www.w3.org/Protocols/rfc822/) formatted date representing the deadline of a task
    *   **"__v"** : Version number property automatically added by Mongoose

* * *

### Update Records - HTTP POST REQUEST

#### /api/todo/<todoListId>

Update a Todo List's details (i.e. its name).

**Parameters - Passed via URL and x-www-form-urlencoded**

*   **<todoListId>** : _String passed via URL_ - Mongo _id string specifying which Todo List the task belongs to.
*   **todoName** : _String_ - Specifies the name of the Todo List. If not present; retains previous value.

Returns an object containing the updated details of the Todo List that you just altered

#### /api/todo/<todoListId>/task/<taskId>

Update the specified Task within a specified Todo List

**Parameters - Passed via URL and x-www-form-urlencoded**

*   **<todoListId>** : _String passed via URL_ - Mongo _id string specifying which Todo List the task belongs to.
*   **<taskId>** : _String passed via URL_ - Mongo _id string specifying which Task you want to update.
*   **taskName** : _String_ - Specifies The name of the task that you are creating. If not present; retains previous value.
*   **taskDescription** : _String_ - The description of the task that you are creating. If not present; retains previous value.
*   **taskDeadline** : _Date_ - A [RCF-822](http://www.w3.org/Protocols/rfc822/) formatted date string representing the time that the deadline of the task. If not present; retains previous value.

Returns an object containing the updated details of the individual Task that you just altered

* * *

### Delete Records - HTTP DELETE REQUEST

#### /api/todo/<todoListId>/delete/

Delete a Todo List and all of its associated Tasks

**Parameters - Passed via URL only**

*   **<todoListId>** - _String passed via URL_ - Mongo _id string specifying which Todo List to be delted.

#### /api/todo/<todoListId>/task/

Delete one or more tasks within a specified Todo List

**Parameters - Passed via URL and x-www-form-urlencoded**

*   **<todoListId>** - _String passed via URL_ - Mongo _id string specifying which Todo List the Task belongs to.
*   **deleteIdArray** - _Array_ - An array containing 1 or more task mongo _id strings to be deleted.

* * *

Any problems feel free to ping Jafit on Slack.

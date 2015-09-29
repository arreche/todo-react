module.exports = {
  todos: [
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
  ],
  todo: {
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
  }
}

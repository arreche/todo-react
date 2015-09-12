import HttpClient from './httpClient';

export default class TaskService {
    
    constructor() {
        this.httpClient = new HttpClient();
    }
    
    // Returns the newly created todo list
    create(todo, task) {
        return this.httpClient.POST(`/api/todo/${todo._id}/task`, task);
    }
    
    // Returns the updated todo list
    update(todo, task) {
        return this.httpClient.PUT(`/api/todo/${todo._id}/task/${task._id}`, task);
    }
    
    delete(todo, ...tasks) {
        let ids = tasks.map(task => task._id);
        
        console.log(ids);
        return this.httpClient.DELETE(`/api/todo/${todo._id}/task`, {
            deleteIdArray: ids
        });
    }
}
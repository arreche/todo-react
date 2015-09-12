import HttpClient from './httpClient';

export default class TodoService {
    
    constructor() {
        this.httpClient = new HttpClient();
    }
    
    // Returns the newly created todo list
    create(name) {
        return this.httpClient.POST('/api/todo', {
            todoName: name
        });
    }
    
    getAll() {
        return this.httpClient.GET('/api/todo');
    }
    
    get(id) {
        return this.httpClient.GET(`/api/todo/${id}`);
    }
    
    // Returns the updated todo list
    update(todo) {
        return this.httpClient.PUT(`/api/todo/${todo._id}`, todo);
    }
    
    delete(todo) {
        return this.httpClient.DELETE(`/api/todo/${todo._id}`);
    }
}
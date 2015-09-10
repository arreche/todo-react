import HttpClient from './httpClient';

export default class TodoService {
    
    create(todo) {
        return Promise.resolve();
    }
    
    getAll() {
        return new HttpClient().GET('/api/todo');
    }
    
    get(id) {
        return Promise.resolve('ff');
    }
    
    update(todo) {
        return Promise.resolve();
    }
    
    delete(todo) {
        return Promise.resolve();
    }
}
import React from 'react';
import Hello from './component.jsx';

import './styles.sass';

main();

function main() {
  React.render(<Hello />, document.getElementById('app'));
}


import TodoService from './api/todoService';
let todoService = new TodoService();

todoService
    .getAll()
    .then(result => console.log(result))
    .catch(err => console.log('Error: ' + err));

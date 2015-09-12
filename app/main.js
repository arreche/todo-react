import React from 'react';
import TodoApp from './todoApp.jsx';

import './styles.sass';

import {todos, todo} from './data.js';

function main() {
  React.render(<TodoApp todos={todos} todo={todo} />, document.body);
}

main();

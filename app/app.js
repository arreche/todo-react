import React from 'react';
import Hello from './component.jsx';

import './styles.sass';

main();

function main() {
  React.render(<Hello />, document.getElementById('app'));
}

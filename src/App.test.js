import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './style.css';
import './scripts.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

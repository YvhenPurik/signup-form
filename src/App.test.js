import React from 'react';
import ReactDOM from 'react-dom';
import SignUpStep1 from './components/SignUpStep1';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SignUpStep1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});

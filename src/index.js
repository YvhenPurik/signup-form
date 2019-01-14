import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpStep1 from './components/SignUpStep1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<SignUpStep1 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

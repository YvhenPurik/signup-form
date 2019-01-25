import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/router';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';

import store from './store/reducer'


 



ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>
, document.getElementById('root'));






serviceWorker.unregister();

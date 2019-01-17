import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpStep1 from './components/SignUpStep1';
import SignUpStep2 from './components/SignUpStep2';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store/reducer'


  



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={SignUpStep1} />
        <Route path="/step2" component={SignUpStep2} />
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));






serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpStep1 from './components/SignUpStep1';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const initialState = [
      'goreelas fours',
      'boolean true'
];

function signUpData(state = [], action){
    if(action.type === 'ADD_EMAIL'){
      return [
        ...state,
        action.payload
      ]
  
    }
    if(action.type === 'ADD_PASS'){
        return [
            ...state,
            action.payload
          ]
    }
    if(action.type === 'ADD_PASS_CONFIRM'){
        return [
            ...state,
            action.payload
          ]
    }
    return state;
  }
  const store = createStore(signUpData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
//   console.log(store.getState())
  
  store.subscribe(() => {
    console.log('subscribe', store.getState());
  })
  
//   store.dispatch({type: 'ADD_TRACK', payload: 'teenage in love'});
//   store.dispatch({type: 'ADD_TRACK', payload: 'its green'});

ReactDOM.render(
<Provider store={store}>
<SignUpStep1 />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

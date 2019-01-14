import React, { Component } from 'react';
import {createStore} from 'redux';
import '../App.css';



function play(state = [], action){
  if(action.type === 'ADD_TRACK'){
    return [
      ...state,
      action.payload
    ]

  }
  return state;
}
const store = createStore(play);

console.log(store.getState())

store.subscribe(() => {
  console.log('subscribe', store.getState());
})

store.dispatch({type: 'ADD_TRACK', payload: 'teenage in love'});
store.dispatch({type: 'ADD_TRACK', payload: 'its green'});

class SignUpStep1 extends Component {
  render() {
    return (
      <div className="App">
      <div className="signUp-form">
      <div>
        <h2>Signup</h2>
      </div>
      <div className="progresLine-step1"></div>
        <input></input>
        <input></input>
        <input></input>
        <div className="footerForm"></div>
        <button className="buttonNextStep1">next</button>
      </div>
    </div>
    );
  }
}

export default SignUpStep1;

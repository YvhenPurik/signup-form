import React, { Component } from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import '../App.css';

class SignUpStep1 extends Component {
 

  regData() {
    console.log('onclick good', this.emailInput.value);
    this.props.onAddEmail(this.emailInput.value);
    this.props.onAddPassword(this.passwordlInput.value)
    this.props.onAddPasswordConfirm(this.confirmPasswordlInput.value)
  }

  render() {
    console.log(this.props.testStore)
    return (
      <div className="App">
      <div className="signUp-form">
      <div>
        <h2>Signup</h2>
      </div>
      <div className="progresLine-step1"></div>
        <input ref={(input) => {this.emailInput = input}} />
        <input ref={(input) => {this.passwordlInput = input}}></input>
        <input ref={(input) => {this.confirmPasswordlInput = input}}></input>
        <div className="footerForm"></div>
        <button onClick={this.regData.bind(this)} className="buttonNextStep1">next ></button>
      </div>
    </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
   onAddEmail: (Email) => {
     dispatch({ type: 'ADD_EMAIL', payload: Email});
   },
   onAddPassword: (Pass) => {
    dispatch({ type: 'ADD_PASS', payload: Pass});
  },
  onAddPasswordConfirm: (PassConfirm) => {
    dispatch({ type: 'ADD_PASS_CONFIRM', payload: PassConfirm});
  }

  })
)(SignUpStep1);

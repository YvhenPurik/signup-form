import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

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
        <span>EMAIL</span>
        <input className="InputregStep1" placeholder="" ref={(input) => {this.emailInput = input}} />
        <span>PASSWORD</span>
        <input className="InputregStep1 " placeholder="" ref={(input) => {this.passwordlInput = input}}></input>
        <span>CONFIRM PASSWORD</span>
        <input className="InputregStep1 " placeholder="" ref={(input) => {this.confirmPasswordlInput = input}}></input>
        <div className="footerForm_step1"></div>
        <Link to={"/step2"} onClick={this.regData.bind(this)}  className="buttonNextStep1">Next</Link>
        
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

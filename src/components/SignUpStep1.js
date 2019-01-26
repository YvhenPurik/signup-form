import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { bindAll } from "lodash";


class SignUpStep1 extends Component {
  constructor(props){
    super(props)
    bindAll(this, ['validation', 'regData'])

    

  }
  state = {
     email: '',
     pass: '',
     confirmPass: '',
     erroreMail: 'EMAIL',
     errorPass: 'PASSWORD',
     errorConfirmPass: 'CONFIRM PASSWORD',
     validEmail: false,
     validPass: false,
     validConfirmPass: false,
     formValid: '',
     
   }

   

   
  validation(){
    var emailRegExp = new RegExp("^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+.)+[a-z]{2,6}$");
    
    if(this.state.pass === ''){
      this.setState({
        errorPass: 'PASSWORD IS REQUIRED',
        validPass: false,
      })
      }else if(this.state.pass.length < 3){
      this.setState({
        errorPass: 'PASSWORD MUST BE MORE LETTERS',
        validPass: false,
      })
    }else if(this.state.pass.length > 3){
      this.setState({
        errorPass: 'PASSWORD',
        validPass: true,
      })
    }
    if(this.state.pass !== this.state.confirmPass){
      this.setState({
        errorConfirmPass: 'PASSWORD DO NOT MATCH',
        validConfirmPass: false,
      })
    }else if(this.state.pass === this.state.confirmPass){
      this.setState({
        errorConfirmPass: 'CONFIRM PASSWORD',
        validConfirmPass: true,
      })
    }
    if(this.state.email === ''){
      this.setState({
        erroreMail: 'EMAIL IS REQUIRED',
        validEmail: false,
      })
    }else if(emailRegExp.test(this.state.email)){
      this.setState({
        erroreMail: 'EMAIL',
        validEmail: true,
      })
    }else if(!emailRegExp.test(this.state.email)){
      this.setState({
        erroreMail: 'EMAIL NOT VALID',
        validEmail: false,
      })
    }
}

   
regData(){
  this.props.onAddEmail(this.emailInput.value);
  this.props.onAddPassword(this.passwordlInput.value);
  this.props.onAddPasswordConfirm(this.confirmPasswordlInput.value);
  this.props.formStepOneValid(true)
  this.setState({
    email: '',
    pass: '',
    confirmPass: '',
    
  })
}
  
      
 

  render() {
    
    if(this.state.validEmail && this.state.confirmPass && this.state.validConfirmPass){
      this.regData()
      
      }
    // console.log('  pass--> ',this.state.pass, '  confirm--> ', this.state.confirmPass, ' email->  ', this.state.email)
    return (
      <div className="App">


      <div className="signUp-form">
      <div>
        <h2>Signup</h2>
    </div>
      <div className="progresLine-step1"></div>
      <span style={this.state.erroreMail !== 'EMAIL' ? {color:"#db3036"} : {color:"grey"}}>
        {this.state.erroreMail}
        </span>
        <input className="InputregStep1" onChange={(e) => this.setState({ email: e.target.value })} 
        placeholder="" ref={(input) => {this.emailInput = input}} />

        <span style={this.state.errorPass !== 'PASSWORD' ? {color:"#db3036"} : {color:"grey"}}>
        {this.state.errorPass}
        </span>

        <input className="InputregStep1 " onChange={(e) => this.setState({ pass: e.target.value })} placeholder="" ref={(input) => {this.passwordlInput = input}}></input>
        
        <span style={this.state.errorConfirmPass !== 'CONFIRM PASSWORD' ? {color:"#db3036"} : {color:"grey"}}>
        {this.state.errorConfirmPass}
        </span>

        <input className="InputregStep1 " onChange={(e) => this.setState({ confirmPass: e.target.value })} 
        placeholder="" ref={(input) => {this.confirmPasswordlInput = input}}>
        </input>

        <div className="footerForm_step1"></div>
        <Link to={this.state.formValid ? "/step2" : "/" }  
              onClick={this.validation}  
              className="buttonNextStep1">Next
        </Link>
        
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
  },
  formStepOneValid: (formStepOneValid) => {
    dispatch({ type: 'ADD_VALID_FORM_STEP1', payload: formStepOneValid});
  }

  })
)(SignUpStep1);

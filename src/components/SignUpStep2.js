import React, { Component } from 'react';

import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import SelectInput from './selectInput'
import SelectAge from './selectAge'

// import '../App.css';

class SignUpStep2 extends Component {

  state = {
    selected: ''
  };

  
 

  regDataStep2() {
    
    this.props.onAddDateBirthDay(this.dayBirth.value);
    this.props.onAddDateBirthDay(this.monthBirth.value);
    this.props.onAddDateBirthDay(this.yearhBirth.value);
    this.props.onAddDataGender(this.state.selected);
    
  }
  

  

  render() {

    console.log(this.state.selected)
    
    return (
   <div className="App">
      <div className="signUp-form">
      <div>
        <h2>Signup</h2>
      </div>
      <div className="progresLine-step2"></div>
      <span className="span_step2">DATE OF BIRTH</span>
      <div className="input_step2-wrap">
       <SelectAge/>
       
       </div>
       <span className="span_step_gender">GENDER</span>
       <div className="radio-group">
        <input type='radio' id="option-one" name='myRadio' value='MALE'
          checked={this.state.selected === 'MALE'} onChange={(e) => this.setState({ selected: e.target.value })} />
          <label htmlFor="option-one">MALE</label>
        
        <input type='radio' id="option-two" name='myRadio' value='FEMALE' 
          checked={this.state.selected === 'FEMALE'} onChange={(e) => this.setState({ selected: e.target.value })} />
          <label htmlFor="option-two">FEMALE</label>
          
        <input type='radio' id="option-three" name='myRadio' value='UNSPECIFIED' 
          checked={this.state.selected === 'UNSPECIFIED'} onChange={(e) => this.setState({ selected: e.target.value })} />
          <label htmlFor="option-three">UNSPECIFIED</label>
      </div>
      <span className="span_step_select">WHERE DID YOU HEAR ABOUT IS?</span>
       <SelectInput/>

        <div className="footerForm"></div>
        <Link to={"/"}  className="buttonNextStep1">Back</Link>
        <Link to={"/step3"} onClick={this.regDataStep2.bind(this)}  className="buttonNextStep1">Next</Link>
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
   onAddDateBirthDay: (dateBirthDay) => {
     dispatch({ type: 'ADD_DATE_BIRTH', payload: dateBirthDay});
   },
   onAddDataGender: (dateBirthGender) => {
    dispatch({ type: 'ADD_GENDER', payload: dateBirthGender});
  },

  })
)(SignUpStep2);

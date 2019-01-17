import React, { Component } from 'react';

import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import SelectInput from './selectInput'

// import '../App.css';

class SignUpStep2 extends Component {

  state = {
    selected: ''
  };

  componentDidUpdate () {
    console.log(document.querySelector('input[name=myRadio]:checked').value);
  }
 

  regDataStep2() {
    
    this.props.onAddDateBirthDay(this.dayBirth.value);
    this.props.onAddDateBirthDay(this.monthBirth.value);
    this.props.onAddDateBirthDay(this.yearhBirth.value);
    this.props.onAddDataGender(document.querySelector('input[name=myRadio]:checked').value);
  }
  

  

  render() {

    
    
    return (
   <div className="App">
      <div className="signUp-form">
      <div>
        <h2>Signup</h2>
      </div>
      <div className="progresLine-step2"></div>
      <span className="span_step2">DATE OF BIRTH</span>
      <div className="input_step2-wrap">
      
       <input type="number" min="1" max="31" ref={(input) => {this.dayBirth = input}} className="inputregStep2_age rounding_corners_left" placeholder="DD"></input>
        <input type="number" min="1" max="12" ref={(input) => {this.monthBirth = input}} className="inputregStep2_age" placeholder="MM"></input>

       <input type="number" min="1900" max="2019" ref={(input) => {this.yearhBirth = input}} className="inputregStep2_age rounding_corners_right" placeholder="YYYY"></input>
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
        <Link to={"/step2"} onClick={this.regDataStep2.bind(this)}  className="buttonNextStep1">Next</Link>
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

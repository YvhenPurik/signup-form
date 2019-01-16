import React, { Component } from 'react';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import '../App.css';

class SignUpStep2 extends Component {
 

  regDataStep2() {
    
    this.props.onAddDateBirthDay(this.dayBirth.value);
    this.props.onAddDateBirthDay(this.monthBirth.value);
    this.props.onAddDateBirthDay(this.yearhBirth.value);
  }

  render() {
    
    return (
      <div className="App">
      <div className="signUp-form">
      <div>
        <h2>Signup</h2>
      </div>
      <div className="progresLine-step2"></div>
      <div className="input_step2-wrap">
       <input type="number" min="1" max="31" ref={(input) => {this.dayBirth = input}} className="inputregStep2_age rounding_corners_left" placeholder="DD"></input>
        <input type="number" min="1" max="12" ref={(input) => {this.monthBirth = input}} className="inputregStep2_age" placeholder="MM"></input>

       <input type="number" min="1900" max="2019" ref={(input) => {this.yearhBirth = input}} className="inputregStep2_age rounding_corners_right" placeholder="YYYY"></input>
       </div>
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

  })
)(SignUpStep2);

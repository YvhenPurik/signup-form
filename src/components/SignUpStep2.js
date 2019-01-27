import React, { Component } from 'react';

import {connect} from 'react-redux';
import { Link } from "react-router-dom";

import { bindAll } from "lodash";

class SignUpStep2 extends Component {

  constructor(props){
    super(props)
    bindAll(this, ['dayHandler', 'monthHandler', 'yearHandler', 'changeYear'])

  }

  state = {
    selected: '',
    optionDay: true,
    optionMonth: true,
    optionYear: true,
    validAge: new Date().getFullYear(),
    errorAge: false,
    msgAge: 'DATE OF BIRTH',
    msgGender:'GENDER',
    formValid: false,
  };

regDataStep3() {
  if(this.state.selected && !this.state.optionDay && !this.state.optionMonth && !this.state.optionYear && !this.state.errorAge){
    this.props.onAddDateBirthDay(this.dayBirth.value);
    this.props.onAddDateBirthDay(this.monthBirth.value);
    this.props.onAddDateBirthDay(this.yearhBirth.value);
    this.props.onAddDataGender(this.state.selected);
    this.props.onAddDataHear(this.hearAbout.value);
    this.props.validForm2(true);
    
    this.setState({
      formValid: true,
    })
  }
    
    
    if(this.state.optionMonth){
      this.setState({
        msgAge: 'MOTH MUST BE SELECTED'
      })
    }
    else if(this.state.optionDay){
      this.setState({
        msgAge: 'DAY MUST BE SELECTED'
      })
    }
   else if(this.state.optionYear){
      this.setState({
        msgAge: 'YEAR MUST BE SELECTED'
      })
    }else if(!this.state.optionYear){
      this.setState({
        msgAge: 'DATE OF BIRTH'
      })
    }

    if(this.state.selected === ''){
      this.setState({
        msgGender: 'GENDER MUST BE SELECTED'
      })
    }else if(this.state.selected !== ''){
      this.setState({
        msgGender: 'GENDER'
      })
    }
  }
  
  dayHandler(){
    this.setState({
      optionDay: false
    })
  }
  monthHandler(){
    this.setState({
      optionMonth: false
    })
  }
  yearHandler(){
    this.setState({
      optionYear: false
    })
  }
  changeYear(){
    let nowYear = new Date().getFullYear();
    if(18 >= +nowYear - +this.yearhBirth.value){
     
      this.setState({
        errorAge: true
      })
    }else{
      
      this.setState({
        errorAge: false
      })
    }
  }
  

  render() {
    let day = [], i = 0, len = 31;
    while (++i <= len) day.push(i);

    let month = [], iMonth = 0, lenMonth = 12;
    while (++iMonth <= lenMonth) month.push(iMonth);

    let nowYear = new Date().getFullYear();
    let year = [], iYear = nowYear, lenYear = 1930;
    while (--iYear >= lenYear) year.push(iYear);
    
    return (
   <div className="App">
      <div className="signUp-form">
      <div>
        <h2>Signup</h2>
      </div>
      <div className="progresLine-step2"></div>

      {
      this.state.errorAge ? 
      <span className={this.state.errorAge ?"span_step2_error" : "span_step2" } >
      YOUR AGE MUST BE 18+</span> : 
      <span className={"span_step2"} style={this.state.msgAge === 'MOTH MUST BE SELECTED' 
      || this.state.msgAge === 'DAY MUST BE SELECTED' 
      || this.state.msgAge === 'YEAR MUST BE SELECTED' ? {color:"#db3036", transform: "translate(120px, 47px)"} : null} >{this.state.msgAge}</span> 
      }
      <div className="input_step2-wrap">
      

        <select onFocus={this.dayHandler}  ref={(input) => {this.dayBirth = input}} className="inputregStep2_age rounding_corners_left" placeholder="DD">
        {this.state.optionDay ?<option>DD</option> : null} 
        {day.map(function (i) {
        return <option key={i} index={i} value={i}>{i}</option>;
         })}
       </select>
        <select onFocus={this.monthHandler} ref={(input) => {this.monthBirth = input}} className="inputregStep2_age" placeholder="MM">
        {this.state.optionMonth ?<option>MM</option> : null} 
        {month.map(function (iMonth) {
        return <option key={iMonth} index={iMonth} value={iMonth}>{iMonth}</option>;
         })}
        </select> 
      
       <select onFocus={this.yearHandler} ref={(input) => {this.yearhBirth = input}}  
       onChange={ this.changeYear} className="inputregStep2_age rounding_corners_right" placeholder="YYYY">
       {this.state.optionYear ?<option>YYYY</option> : null} 
       {year.map(function (iYear) {
        return <option key={iYear} index={iYear} value={iYear}>{iYear}</option>;
         })}
       </select>
       
       </div>
       <span className="span_step_gender" style={this.state.msgGender === 'GENDER MUST BE SELECTED' ? 
       {color:"#db3036", transform: "translate(120px, 27px)"} : null}>{this.state.msgGender}</span>
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

       <div className="notIE">
        <span className="fancyArrow"></span>
        <select ref={(input) => {this.hearAbout = input}}>
            <option value='' ></option>
            <option  value='from the Internet'>from the Internet</option>
            <option value='from tv'>from television</option>
            <option value='from frends'>from friends</option>
        </select>
      </div> 

        <div className="footerForm"></div>
        <Link to={"/"}  className="buttonBack">Back</Link>
        <Link to={"/step2"} onClick={this.regDataStep3.bind(this)}  className="buttonNextStep1">Next</Link>
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

  onAddDataHear: (dateHear) => {
    dispatch({ type: 'ADD_HEAR_ABOUT', payload: dateHear});
  },
  validForm2: (validForm2) => {
    dispatch({ type: 'ADD_VALID_FORM_STEP2', payload: validForm2});
  },

  })
)(SignUpStep2);

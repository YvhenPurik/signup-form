import React, { Component } from 'react';
import {connect} from 'react-redux';

 class SelectInput extends Component {

    
   render(){
    return(
    <div>
      <div className="notIE">
        <span className="fancyArrow"></span>
        <select name="myRadio" >
            <option value='' ></option>
            <option  value='from the Internet'>from the Internet</option>
            <option value='from tv'>from television</option>
            <option value='from frends'>from friends</option>
        </select>
      </div> 
    </div>
       )
   }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
   onAddHearAbout: (HearAbout) => {
     dispatch({ type: 'ADD_HEAR_ABOUT', payload: HearAbout});
   },
  })
)(SelectInput);
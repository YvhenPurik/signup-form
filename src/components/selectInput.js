import React, { Component } from 'react';


export default class SelectInput extends Component {

    componentDidUpdate () {
        // console.log('onclick good', this.option.value);
      }
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

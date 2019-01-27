import React, { Component } from 'react';
import store from '../store/reducer'
import sucess from '../img/sucess.png'


class SignUpStep3 extends Component {
  
         
        
 

render() {
let dataForBeckend = JSON.stringify(store.getState())
  console.log(dataForBeckend)
return (
   <div className="App">
      <div className="signUp-form">
      <div>
        <h2>Thank you!</h2>
      </div>
      <div className="progresLine-step3"></div>
      <img className="imgSucess" src={sucess} alt={"logo"}/> 
      <button className="btn_go_dashboard">Go to Dashboard</button>
      </div>
    </div>
    );
  }
}

export default SignUpStep3;

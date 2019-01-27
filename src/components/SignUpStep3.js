import React, { Component } from 'react';
import store from '../store/reducer'


class SignUpStep3 extends Component {
  
         
        
 

render() {
  console.log(store.getState())
return (
   <div className="App">
      <div className="signUp-form">
      <div>
        <h2>Thank you!</h2>
      </div>
      <div className="progresLine-step3"></div>
        
      </div>
    </div>
    );
  }
}

export default SignUpStep3;

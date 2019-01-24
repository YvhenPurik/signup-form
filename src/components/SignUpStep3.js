import React, { Component } from 'react';


import { Link } from "react-router-dom";


// import '../App.css';

class SignUpStep3 extends Component {

 
  

  

  render() {

    
    
    return (
   <div className="App">
      <div className="signUp-form">
      
        <Link to={"/step2"}   className="buttonNextStep1">Next</Link>
      </div>
    </div>
    );
  }
}

export default SignUpStep3;

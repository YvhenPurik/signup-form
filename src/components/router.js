
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import React, { Component}  from 'react';
import store from '../store/reducer'



       
        
        
export default class Router extends Component {
    constructor(props){
        super(props)
        store.subscribe(() => {
            
            this.setState({
                validForm1: store.getState().validForm1,
                validForm2: store.getState().validForm2
            })
        });

        this.state ={
            validForm1: false,
            validForm2: false,

        }

        
    }

    
    validForm1 = () => this.state.validForm1 ? <Redirect to="/step2"/> : <SignUpStep1/>;
    validForm2 = () => this.state.validForm2 ? <Redirect to="/step3"/> : <SignUpStep2/>;
    
    
    render(){
        
        
        return (
            
            <BrowserRouter>
              <div>
              <Route exact path="/" component={this.validForm1}/>
              <Route path="/step2" component={this.validForm2} />
              <Route path="/step3" component={SignUpStep3} />
              </div>
            </BrowserRouter>
          
        )
    }
}
    

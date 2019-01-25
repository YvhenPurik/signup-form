
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import React, { Component}  from 'react';
import store from '../store/reducer'



        // var lastItem = formOneValid[formOneValid.length - 1]
        
        
export default class Router extends Component {
    constructor(props){
        super(props)
        store.subscribe(() => {
            console.log(store.getState());
            this.setState({
                validForm1: store.getState().validForm1
            })
        });

        this.state ={
            validForm1: false
        }

        
    }

    
    validForm1 = () => this.state.validForm1 ? <Redirect to="/step2"/> : <SignUpStep1/>;
    
    
    render(){
        let some = this.state.validForm1;
        console.log(some);
        
        return (
            
            <BrowserRouter>
              <div>
              <Route exact path="/" component={this.validForm1.bind(this)}/>
              <Route path="/step2" component={SignUpStep2} />
              <Route path="/step3" component={SignUpStep3} />
              </div>
            </BrowserRouter>
          
        )
    }
}
    


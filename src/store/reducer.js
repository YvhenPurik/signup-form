import {createStore} from 'redux';


const initialState = {
    email: '',
    pass: '',
    confirmPass: '',
    dateBirth:'',
    gender:'',
    hearAbout:'',
    validForm1:undefined,
    validForm2:undefined,
    
  }
  
function signUpData(state = initialState, action){
      if(action.type === 'ADD_EMAIL'){
        return {
          ...state,
          email:  action.payload
        }
    
      }
      if(action.type === 'ADD_PASS'){
        return {
          ...state,
          pass: action.payload
        }
      }
      if(action.type === 'ADD_PASS_CONFIRM'){
        return {
          ...state,
          confirmPass:  action.payload
        }
      }

      if(action.type === 'ADD_DATE_BIRTH'){
        return {
          ...state,
          dateBirth: [...state.dateBirth, action.payload]
        }
      }
      if(action.type === 'ADD_GENDER'){
        return {
          ...state,
          gender:  action.payload
        }
      }
      if(action.type === 'ADD_VALID_FORM_STEP1'){
        return {
          ...state,
          validForm1:  action.payload
        }
      }
      if(action.type === 'ADD_HEAR_ABOUT'){
        return {
          ...state,
          hearAbout:  action.payload
        }
      }
      if(action.type === 'ADD_VALID_FORM_STEP2'){
        return {
          ...state,
          validForm2: action.payload
        }
      }
      
      return state;
    }
    const store = createStore(signUpData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    export default store;
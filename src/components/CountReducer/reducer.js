import { Button } from "bootstrap";

const myReducer = (state,action)=>{        // useReducer take 2 parameter 1- state, 2- action object
    if (action.type === "increment") {
               state = {
            ...state,                      // define the data 
        count:state.count + action.payload,
     };
    } else if (action.type==="decrement"){
        state = {
            ...state,
            count:state.count - action.payload,
         };
    } else {
        state ={
            ...state,
            count: 0,
        }
    }

    return state;

}

export default myReducer;


import {useState} from "react";
import myStore from "../store/store";

function InputComp(){
    const [state,setState] = useState("")
    const sendDateToDispatch = ()=>{

        // Creating one action object, it is nthg but object & it have one mandatory property called "type"
        var actionObj = {  
            type:"NAME",  // mandatory property
            payload:state,
 
        };
         // Calling DISPATCH by using import the store, using our store we have access the "dispatch"
        myStore.dispatch(actionObj)
    };
    return(
        <div className="mt-5 text-center " >
            <h3>Input Component</h3>
            <input type="text" placeholder="Enter Some Text" onChange={(e)=>{
                setState(e.target.value);
            }} />
            <button className="btn btn-primary mx-2" onClick={sendDateToDispatch} >Submit</button>
        </div>
    )
};

export default InputComp;
import { useState, useReducer } from "react";
import myReducer from "./reducer";

function CountReducer(props){
    // const [state,setState] = useState(0);

    const [state,dispatch] = useReducer(myReducer,{count : 0});

    // const increaseCount = ()=>{            // Using state we have creating Increament operation
    //     setState(state + 5);
    // };
    // const decreaseCount = ()=>{            // Using state we have creating decreament operation
    //     setState(state - 5);
    // };
    // const reset = ()=>{
    //     setState (0);
    // };
    return(
        <div className="container mt-5" style={{boxShadow:"0 0 10px black", width:"1200px", height:"100px"}}>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <h3>Value Count Is {state.count}</h3>
                </div>
                <div className="row" >
                    <div className="col-4"></div>
                    <div className="col-1">
                        <button onClick={()=>{ 
                            dispatch({
                            type:"increment",
                            payload:5
                        }) }} className="btn btn-outline-success " >Increase</button>
                    </div>
                    <div  className="col-1">
                        <button onClick={()=>{
                        dispatch({
                            type:"decrement",
                            payload:5
                        })
                    }}
                        className="btn btn-outline-danger mx-2" >Decrease</button>
                    </div>
                    <div onClick={()=>{ 
                        dispatch({
                            type:"reset"
                        })}}
                    className="col-1">
                        <button className="btn btn-outline-info mx-4" >Reset</button>
                    </div>
                </div>
                
            </div>
            

        </div>
    )
}

export default CountReducer;
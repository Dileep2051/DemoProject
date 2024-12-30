import { useState } from "react";
import Demoparent from "./Demoparent";

function Demochild(props){
    const [childstate, setChildState] = useState();

    const sendDataToParent = ()=>{
        props.updateState(childstate);

    };
    return (
        <div>
            <h2>Child Component</h2>
            <input type="text" placeholder="Enter Some Text" onChange={(e)=>{setChildState(e.target.value)}} />
            <button onClick={sendDataToParent} >Submit</button>
        </div>
    );
};

export default Demochild;
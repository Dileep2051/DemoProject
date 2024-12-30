import { useState } from "react";
import Demochild from "./Demochild";

function Demoparent(props){
    const [state, setState] = useState("Boss");

    const updateState = (data)=>{
        setState(data);
    };
    return(
        <div>
            <h2>Parent Component</h2>
            <p> Child Data : <span style={{ color:"red" }} > {state} </span> </p>
            <Demochild updateState={updateState} />

            
        </div>
    );
};

export default Demoparent;
import {useState} from "react";
import Child from "./Child";

var parentstyle = {           // Creating one object for style
    width:"500px",
    margin:"100px auto",
    padding:"10px",
    textAlign: "center",
    boxShadow: "0 0 10px black"
};

function Parent(props){
    const [state, setState] = useState("ChildData");  //setState will do 2things, 1st=> It will update our state. 2nd=> Re-render our Parent component.

    const updateState = (data)=>{  //Rapper Function
        setState(data);
    };
    return(
        <div style={parentstyle} >
            <h2>Parent Component</h2>
            <p>Child data : <span style={{color:"red" }}>{state}</span> {} </p>
            <Child updateState={updateState} /> 

        </div>
    );
};

export default Parent;

// Using Props concept we are passing the setState to our child component (<Child />)
// Instead of passing directly we are used one "RAPPER FUNCTION" [ This is completely OPTIONAL this approach,
// But it is recommended as well ]

// What is updateState will do?
// Simply store that child data inside this data and internally it will call setState and it wil pass the data.

// What setState will do?
// It will update our state and re-render our component & new data will update in UI ("{state}").



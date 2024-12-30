import {useState} from "react";
import B from "./B";
import childContext from "./childContext";


function A(props){
    const [ parentstate,setParentState] = useState("Null");

    const updateState = (data) => {         //Rapper function
        setParentState(data);
    };
    return(
        <div style={{
            textAlign:"center", fontFamily: "Times New Roman" ,padding: "20px", width: "800px" , boxShadow:"0 0 10px red", margin:"100px auto"
        }} >
            <h2>A Component</h2>
            <p>
                Child Data : 
                <span style={{color:"red", fontSize:"25px" }} > {parentstate} </span>
            </p>      
            <childContext.Provider value={{updateState: updateState }}>        
                <B />        
            </childContext.Provider> 

        </div>
    );
};

export default A;


//Provider component <childContext.Provider value={{updateState: updateState }}>
 // <B />    Now whatever data will store in childContext , that will available for B + It will be available for all childrens.

 // Using Props concept we are passing the setState to our child component 
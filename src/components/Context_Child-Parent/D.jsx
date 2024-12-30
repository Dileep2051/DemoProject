import {useContext,useState} from "react";
import childContext from "./childContext";

function D(props){
    const [childstate,setChildState] = useState();

    const { updateState }  = useContext(childContext) //useContext written data of childContext
    return(
        <div>
            <h2>D Component</h2>
            <input type="text" placeholder="Enter Text" onChange={(e)=>{setChildState(e.target.value)}} />
            <button onClick={ ()=>{updateState(childstate)} } >Submit</button>
            

        </div>
    );
};

export default D;


// Whats the useContext will written?
// It will written one object, because we have stored one object in the context in that object we stored our setState function as the property.

// So useContext will written whatever we store in the context object.Basically inside the object.
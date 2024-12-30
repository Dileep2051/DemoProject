import Parent from "./Parent";
import {useState} from "react";


var childstyle = {                    // Creating one object for style
    width:"300px",
    margin:"30px auto",
    padding: "5px",
    textAlign: "center",
    boxShadow: "0 0 10px Red"
};
function Child(props){
    const [childstate,setChildState] = useState();

    const sendDatatoParent = ()=> {                  // Rapper function just for call components
        props.updateState(childstate)
    };
    return(
        <div style={childstyle}>
            <h2>Child Component</h2>
            <input type="text" placeholder="Enter Some text" onChange={(e)=>{setChildState(e.target.value)}} />
            <button onClick={sendDatatoParent} >Submit</button>

        </div>
    );
};

export default Child;

// We just created one rapper function inside that we are calling our setState, this rapper function giving to the child component.
// child component will have the option to the props
 
// What is child component will doing?
// child component will do first, It is storing the data of its input element inside one state, its create one state & whenever user will do some changes in input box. First it is storing the data inside the state.
// Now whenver user click on the button , we are calling one function "sendDatatoParent" in this function we are calling parent component function as "setState" using props. To this setState we are passing the data that we have stored in "childstate".

// What is updateState will do?
// Simply store that child data inside this data and internally it will call setState and it wil pass the data.

// What setState will do?
// It will update our state and re-render our component & new data will update in UI.


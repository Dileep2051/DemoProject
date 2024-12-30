import { useState } from "react";


// In this we are using the setState concept to re-rendering the prevState values // Session 31

function Counter1(){
    let [state, setState] = useState(2);
    let [name, setName] = useState("Dileep");
    console.log("Re-rendering"); // This is just for reference to check the re-rendering method in console level
           
        function increaseCount(){
            setState((prevState)=>{return prevState + 1}); //1 , prevState its just an argumemt, we can give any name.

            setState((prevState)=>{return prevState + 2}); //3 [1+2]
            setState((prevState)=>{return prevState + 3}); //6 [1+3+3] re-rendering the all state

            setName("Dinesh");
            // setState(state + 3);
            // setState(state + 2);     // It will re-rendering only last setState, 
                                     //That why using the call back function 
            // setState(()=>) -> This setState call back function will have access of the previous state 
            // setState(function(prevState){return prevState + 5}) -> Updater function ()

        };
        

    return (
        <div className="counter">
            <h2>
                {name} is increase the count value {state} 
            </h2>
            <br />
            <button onClick={increaseCount} style={{boxShadow:"0 0 10px black", width: "200px", height:"50px", fontSize:"15px", fontFamily:"Times New Roman" }} ><b>Increase</b></button>

        </div>
    );
}

export default Counter1;


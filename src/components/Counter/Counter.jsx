import { useState } from "react";
import "./Counter.css";

////////////////////////////////OUTER FUNCTION/////////////////////////
function Counter(){
    let [state, setState] = useState(0);
    let [name, setName] = useState("Dileep");
    
        ////////////////////////////////INNER FUNCTION/////////////////////////

        // var countValue = 20;
        
        function increaseCount(){
            setState(state + 1*4);
            setName("Dinesh");                      // CLOSURE TECHNIQUE
            console.log(state);

            // countValue = countValue + 1 ;
            // console.log(countValue);

        };
        ////////////////////////////////INNER FUNCTION/////////////////////////


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

export default Counter;
////////////////////////////////OUTER FUNCTION/////////////////////////

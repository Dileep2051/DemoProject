import { useState, useRef } from "react";


// To coding the timer count, start, stop // Session 31 -> from half part to 32
// By using useRef(), store some data, which we dont want to loose on re-rendering of component,
// Plus wheneve we update the date but, we don't want to trigger re-rendering. In that case we go with "useRef()"
// DOM Manupulation in useRef()

function Timer(props){

    // let timerId = 0;
    const [timer, setTimer] = useState(0);
    const [timerId, setTimerId] = useState(0);
    let ref1 = useRef("Dileep"); //{current:"Dileep"}
    let h2Ref = useRef(null); // Apart from value null we should not assign any value, 
    // we want consider the ref (h2ref) as element 
    let startBtnRef = useRef(null);
    

    const startTimer= () => {
        h2Ref.current.style.color = "green"; // whever click on start, color changes to green
        startBtnRef.current.disabled = true; // Disable the button
        ref1.current = setInterval(()=>{
            setTimer((prevState) => prevState + 1);    // To start & continue the count 
        },1000);
    };

    const stopTimer = () => {
        h2Ref.current.style.color = "red"; // whever click on stop, color changes to red
        startBtnRef.current.disabled = false;   
        clearInterval(ref1.current); 
    };
    /////h2Ref.current is equal to document.getElementByID////////
////// useRef is written one reference, that reference is attach to JSX Element, [ref]/////////
    return (
        <div style={{ width:"500px" , 
            height: "100px auto",
            boxShadow:"0 0 10px red",
            textAlign:"center",
            margin: "100px auto",
            padding:"30px"
         }}>
            <h2 ref = {h2Ref}>Timer : {timer}</h2>
            <button ref={startBtnRef} onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={stopTimer}>Stop</button>

        </div>
    );
};

export default Timer;



// import { useState, useRef } from "react";

// // By using useRef(), store some data, which we dont want to loose on re-rendering of component,
// // Plus wheneve we update the date but, we don't want to trigger re-rendering. In that case we go with "useRef()"
// // without DOM Manupulation  


// function Timer(props){

//     // let timerId = 0;
//     const [timer, setTimer] = useState(0);
//     const [timerId, setTimerId] = useState(0);
//     let ref1 = useRef("Dileep"); //{current:"Dileep"}
    

//     const startTimer= () => {
//         ref1.current = setInterval(()=>{
//             setTimer((prevState) => prevState + 1);    // To start & continue the count 
//         },1000);
//     };

//     const stopTimer = () => {
//         clearInterval(ref1.current); 
//     };

//     return (
//         <div style={{ width:"500px" , 
//             height: "100px auto",
//             boxShadow:"0 0 10px red",
//             textAlign:"center",
//             margin: "100px auto",
//             padding:"30px"
//          }}>
//             <h2>Timer : {timer}</h2>
//             <button onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <button onClick={stopTimer}>Stop</button>

//         </div>
//     );
// };

// export default Timer;





///////////////////////////////////////////////////////////////////
// useRef() hook is not used in this, onle useState() hook is used
// in STATE, if we update the data in state, component will be re-render.
// Any data which we shown on the screen that type of data we have to store in the "STATE"

// import { useState } from "react";


// // To coding the timer count, start, stop // Session 31

// function Timer(props){

//     // let timerId = 0;
//     const [timer, setTimer] = useState(0);
//     const [timerId, setTimerId] = useState(0);
    

//     const startTimer= () => {
//         setTimerId(                     
//             setInterval(()=>{
//             setTimer((prevState) => prevState + 1);    // To start & continue the count 
//         },1000)
//     ); 
//     };

//     const stopTimer = () => {
//         clearInterval(timerId); 
//     };

//     return (
//         <div style={{ width:"500px" , 
//             height: "100px auto",
//             boxShadow:"0 0 10px red",
//             textAlign:"center",
//             margin: "100px auto",
//             padding:"30px"
//          }}>
//             <h2>Timer : {timer}</h2>
//             <button onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <button onClick={stopTimer}>Stop</button>

//         </div>
//     );
// };

// export default Timer;
import React, { useState } from 'react';

function New(props){

    const [state,setState] = useState(0);

    const increaseCount = ()=>{
        setState(state + 1);
    }

    return (
        <div style={{ textAlign:"center" }}>
          <h3 style={{color:"red"}}>numbers count is {state.count}</h3>
          <button onClick={increaseCount}>Next Number</button>
        </div>
      );
}

export default New;

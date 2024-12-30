import React from "react";



function Component1(props) {
    return(
        <div style={{ textAlign:"center" }} >
            <h2 style={{ color:"red" }} >Component-1</h2>
            <h4> {props.children} </h4> 
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro enim pariatur expedita blanditiis quasi vero veritatis possimus consequuntur, dignissimos alias?</p>

        </div>
    );
};

export default Component1;
import React from "react";



function Component2(props) {
    return(
        <div style={{ textAlign:"center" }} >
            <h2 style={{ color:"green" }} >Component-2</h2>
            <h4> {props.children} </h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro enim pariatur expedita blanditiis quasi vero veritatis possimus consequuntur, dignissimos alias?</p>

        </div>
    );
};

export default Component2;
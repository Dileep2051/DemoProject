import React from "react";
import { useSelector } from "react-redux";


function Info(){
    let state = useSelector((data)=>{
        return data;
       })
    return(
        <div className="container mt-5 text-center"> 
            <h3>Information of the user</h3>
            <p className="lead">
                User name is {""} <span className="text-primary fw-bolder">{state.name} </span>
                and he / she from {""} 
                <span className="text-primary fw-bolder">{state.city} </span>
                city 
            </p>

        </div>
    )
};

export default Info; 
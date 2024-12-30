import React from "react";
import Loginpage from "./Loginpage";
import Homepage from "./Homepage";
import Home from "../ContextAPI-Task/Home";



function Mainpage({isloggedin,login}){
    return(
        <div style={{ textAlign:"center" }}>
           {isloggedin ? <Homepage/> : <Loginpage login={login} /> }

        </div>
    );
};

export default Mainpage;
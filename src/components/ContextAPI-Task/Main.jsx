import React from "react";
import Home from "./Home";
import Login from "./Login";


function Main({isloggedin,login}){    // MAin(isloggedin)=> Wrong , MAin({isloggedin}) => Right
    return(
        <div>
            { 
                isloggedin ? <Home /> : <Login login={login} />   // If the object is "false", then the Login page is reflects, if "true" Home page is reflcets
            }

        </div>
    );
};

export default Main;
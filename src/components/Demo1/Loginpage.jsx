import React, { useState } from "react";



function Loginpage({login}){
    const [user,setUser]=useState({
        username:"", 
        password:""
    })

    const authenticate = ()=>{
        if ( user.username === "Dileep" && user.password === "Dileep7025" ) {
            login()
        }else{
            alert("Check the cred's")
        }
    }


    return(
        <div style={{width:"300px", margin:"100px auto", padding:"30px", boxShadow:"0 0 10px black", textAlign:"center" }} >
            <div>
                <input type="text" placeholder="Username" onChange={(event)=>{
                    setUser({
                        ...user,
                        username: event.target.value
                    })
                }} />
            </div>
            <div>
                <input type="password" placeholder="Password" onChange={(event)=>{
                    setUser({
                        ...user,
                        password: event.target.value
                    })
                }} />
            </div>
            <div>
                <input type="button" value="Login" onClick={authenticate} />
            </div>

        </div>
    );
};

export default Loginpage;
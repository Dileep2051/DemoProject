import {useState} from "react";

function Login({login}){
    const [user, setUser]= useState({
        username:"", 
        password:""
    });

    const authenticateUser =()=>{
        if (user.username === "Dileep" && user.password === "Dileep7025"){
            login()
        }else{
            alert ("Check the credentials");
        }
    };


    return(
        <div style={{ width:"500px", boxShadow: "0 0 10px black", margin: "100px auto", padding:"30px" , textAlign:"center" }}>
            <h2>Login Form</h2>
            <div>
                <div style={{ margin:"20px" }}>
                    <input type="text" placeholder="User Name" onChange={(event)=>{
                        setUser({
                            ...user,  //copying the previous property using spread operater 
                            username:event.target.value,
                        })

                    }} />
                </div>
                <div style={{ margin:"20px" }}>
                    <input type="password" placeholder="Password" onChange={(event)=>{
                        setUser({
                            ...user,
                            password: event.target.value
                        })

                    }} />
                </div>
                <div>
                    <input type="button" value="Login" onClick={authenticateUser} />
                </div>
            </div>

        </div>
    );
};

export default Login;

// using event object we can access the data whatever data type inside the input box. 
// event.target  ==> This is reference of input element
// .value => Will give the data of input element
import "./Userimage.css";
import { useState } from "react";

function Userimage(){
    let [image, useImage] = useState("https://th.bing.com/th/id/OIP.51Ew9xDho_I-wsBYSof5YAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7");

    const changeToRiya = () => {
        useImage ("https://th.bing.com/th/id/OIP.WYQJMK1A9qx4wpb201GIYgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7")
    };

    const changeToDeekshi=() => {
        useImage(
            "https://th.bing.com/th/id/OIP.51Ew9xDho_I-wsBYSof5YAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        )
    };

    // function userImage(){
    //     useImage("https://th.bing.com/th/id/OIP.WYQJMK1A9qx4wpb201GIYgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7");
    //     console.log(image);
    // }


    return(
        <div className="Userimage">
            <img src={image} width={250} height={300} style={{borderRadius:"2%" }} />
            <br /><br />
            <button onClick={changeToRiya} style={{ width:"auto" }}>Riya</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={changeToDeekshi}>Deekshi</button>
        </div>
    )
}
export default Userimage;
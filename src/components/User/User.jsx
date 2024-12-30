import "./User.css";
import { useState } from "react";

function User(){

    let [user, setUser] = useState({
        name: "Riya",
        gender: "Female",
        contact: "9620275604",
        profile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero doloremque voluptatibus architecto sint illo repellendus cumque sunt voluptas cum fuga omnis incidunt, hic quia veritatis exercitationem quidem mollitia rem suscipit ut soluta maxime optio quam a! Porro, excepturi libero architecto dignissimos ducimus consectetur enim quos voluptas cum quas at.",
        image: "https://th.bing.com/th/id/OIP.51Ew9xDho_I-wsBYSof5YAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    });

    let [themetext, setThemeText] = useState({
        style: "userProfileLightTheme",
        text: "Check to switch Dark Mode"
    });

    const changeToDeeksha = () => {
        setUser({
            name: "Deeksha",
            gender: "Female",
            contact: "9108214568",
            profile: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos praesentium cum eius quibusdam voluptatum doloribus pariatur. Magnam voluptate at, doloremque voluptates dolorum eligendi neque maxime inventore, provident, molestiae facilis.",
            image: "https://th.bing.com/th/id/OIP.WYQJMK1A9qx4wpb201GIYgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        });
    };

    const changeToRiya = () => {
        setUser({
            name: "Riya",
            gender: "Female",
            contact: "9620275604",
            profile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero doloremque voluptatibus architecto sint illo repellendus cumque sunt voluptas cum fuga omnis incidunt, hic quia veritatis exercitationem quidem mollitia rem suscipit ut soluta maxime optio quam a! Porro, excepturi libero architecto dignissimos ducimus consectetur enim quos voluptas cum quas at.",
            image: "https://th.bing.com/th/id/OIP.51Ew9xDho_I-wsBYSof5YAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    
        });
    };

    /////////////// To change the Themes from Dark to light & Light to dark /////////////

    const changeTheme = (event) => {
        if (event.target.checked) {

            setThemeText({
                style: "userProfileDarkTheme",
                text: "Uncheck to switch Light Mode",
            });
        } else {
            setThemeText({
                style: "userProfileLightTheme",
                text: "Check to switch Dark Mode",
            });
        }
    };


    return (
        <div className="userContainer">
            <div className="userImage">
                <img src={user.image} width="350px" height="450px" />
            </div>
            

            <div className={themetext.style} >
                <dl>
                    <dt><b>User Name</b></dt>
                    <dd>{user.name}</dd><br />

                    <dt><b>Gender</b></dt>
                    <dd>{user.gender}</dd><br />

                    <dt><b>Contact</b></dt>
                    <dd>{user.contact}</dd><br />

                    <dt><b>Profile</b></dt>
                    <dd> {user.profile} </dd>

                </dl>                           
                <button onClick={changeToRiya}>Riya</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={changeToDeeksha}>Deeksha</button>
                <br /><br />

                <input type="checkbox" onChange={changeTheme}/>
                <label>{themetext.text}</label>
            </div>


        </div>
    );
};

export default User;




///////////////////////////////////////////////////////////////////////////////////////////
///////////////// Code without check box [ Dark mode & Light mode] ///////////////////

// function User(){

//     let [user, setUser] = useState({
//         name: "Riya",
//         gender: "Female",
//         contact: "9620275604",
//         profile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero doloremque voluptatibus architecto sint illo repellendus cumque sunt voluptas cum fuga omnis incidunt, hic quia veritatis exercitationem quidem mollitia rem suscipit ut soluta maxime optio quam a! Porro, excepturi libero architecto dignissimos ducimus consectetur enim quos voluptas cum quas at.",
//         image: "https://th.bing.com/th/id/OIP.51Ew9xDho_I-wsBYSof5YAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7"
//     })

//     const changeToDeeksha = () => {
//         setUser({
//             name: "Deeksha",
//             gender: "Female",
//             contact: "9108214568",
//             profile: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eos praesentium cum eius quibusdam voluptatum doloribus pariatur. Magnam voluptate at, doloremque voluptates dolorum eligendi neque maxime inventore, provident, molestiae facilis.",
//             image: "https://th.bing.com/th/id/OIP.WYQJMK1A9qx4wpb201GIYgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
//         });
//     };

//     const changeToRiya = () => {
//         setUser({
//             name: "Riya",
//             gender: "Female",
//             contact: "9620275604",
//             profile: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero doloremque voluptatibus architecto sint illo repellendus cumque sunt voluptas cum fuga omnis incidunt, hic quia veritatis exercitationem quidem mollitia rem suscipit ut soluta maxime optio quam a! Porro, excepturi libero architecto dignissimos ducimus consectetur enim quos voluptas cum quas at.",
//             image: "https://th.bing.com/th/id/OIP.51Ew9xDho_I-wsBYSof5YAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    
//         });
//     };


//     return (
//         <div className="userContainer">
//             <div className="userImage">
//                 <img src={user.image} width="350px" height="450px" />
//                 </div>
            

//             <div className="userProfile">
//                 <dl>
//                     <dt><b>User Name</b></dt>
//                     <dd>{user.name}</dd><br />

//                     <dt><b>Gender</b></dt>
//                     <dd>{user.gender}</dd><br />

//                     <dt><b>Contact</b></dt>
//                     <dd>{user.contact}</dd><br />

//                     <dt><b>Profile</b></dt>
//                     <dd> {user.profile} </dd>

//                 </dl>
//                 <button onClick={changeToRiya}>Riya</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                 <button onClick={changeToDeeksha}>Deeksha</button>
//                 <br /><br />

//                 <input type="checkbox" /><label htmlFor=""> Change to Switch the Dark Mode</label>
//             </div>


//         </div>
//     );
// };

// export default User;

//////////////////////////////////////////////////////////////////////////////
// onClick -> Event Listener
// changeToRiya => Event Handler

//onChange -> Event Listener


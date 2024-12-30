import React, { useState } from "react";
import "./Demo.css";


function Demo(){

    let [person, setPerson] = useState (
        {
            name: "Priyanka",
            gender: "Female",
            contact: "100",
            profile: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum consequuntur qui deleniti deserunt architecto?",
            image: "https://th.bing.com/th/id/OIP.T7cSCDcC8fujFCg67x1xuQHaIy?w=200&h=238&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        }
    );

    let [ styletext, setStyleText] = useState (
        {
            style: "personProfileDarkTheme",
            text: "Check the Switch to Light mode"
        }
    );

    const changeToDhanveer = () => {
        setPerson({
            name: "Dhanveer",
            gender: "Male",
            contact: "200",
            profile: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum consequuntur qui deleniti deserunt architecto?",
            image: "https://th.bing.com/th/id/OIP.VbSwV0yD0HD3Ks5Kq69cowHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        });
    };

    const changeToPriyanka = () => {
        setPerson({
            name: "Priyanka",
            gender: "Female",
            contact: "100",
            profile: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nostrum consequuntur qui deleniti deserunt architecto?",
            image: "https://th.bing.com/th/id/OIP.T7cSCDcC8fujFCg67x1xuQHaIy?w=200&h=238&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        });

    };



    const changeTheme = (event) => {
        if (event.target.checked) {
            setStyleText({
                style: "personProfileLightTheme",
                text: "Check the Switch to Dark mode"
            });
        }   else {
            setStyleText({
                style: "personProfileDarkTheme",
                text: "Check the Switch to Light mode"
            });
        } 
    };


    return (
        <div className="democontainer">
            <div className="demoimage">
                <img src={person.image} width={300} height={450} />
            </div>

            <div className={styletext.style}>

                <dl>
                    <dt>user Name</dt>
                    <dd>{person.name}</dd><br />

                    <dt>Gender</dt>
                    <dd>{person.gender}</dd><br />

                    <dt>Contact</dt>
                    <dd>{person.contact}</dd><br />

                    <dt>Profile</dt>
                    <dd>{person.profile}</dd><br />

                </dl>

                <button onClick= {changeToPriyanka} >Priyanka</button>&nbsp;
                <button onClick= {changeToDhanveer} >Dhanveer</button>

                <br />
                <input type="checkbox" onChange={changeTheme} />
                <label >{styletext.text}</label>

            </div>

        </div>
    );
}
export default Demo;



// function Demo(){

//     let [person, setPerson] = useState(
//         {
//             name: "Priyanka",
//             gender: "Female",
//             Contact: "100",
//             Profile: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, ipsam.",
//             image: "https://th.bing.com/th/id/OIP.T7cSCDcC8fujFCg67x1xuQHaIy?w=200&h=238&c=7&r=0&o=5&dpr=1.5&pid=1.7",
//         }
//     );

//     let [styletext, setStyleText] = useState({
//         style: "changeToDarkMode",
//         text: " Check the Switch to Light Mode"
//     });

//     const changeToDhanveer = () => {
//         setPerson({
//             name: "Dhanveer",
//             gender: "Male",
//             Contact: "200",
//             Profile: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, ipsam.",
//             image: "https://th.bing.com/th/id/OIP.VbSwV0yD0HD3Ks5Kq69cowHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.5&pid=1.7",
//         });
//     }

//     const changeToPriyanka = () => {
//         setPerson({
//             name: "Priyanka",
//             gender: "Female",
//             Contact: "100",
//             Profile: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, ipsam.",
//             image: "https://th.bing.com/th/id/OIP.T7cSCDcC8fujFCg67x1xuQHaIy?w=200&h=238&c=7&r=0&o=5&dpr=1.5&pid=1.7",

//         })
//     }
        
//     const changeTheme = (event) => {
//         if (event.target.checked){

//             setStyleText({
//                 style: "changeToDarkMode",
//                 text: " Check the Switch to Light Mode"
//             });
//         } else ({
//                 style: "changeToLightMode",
//                 text: " Check the Switch to Dark Mode"
//             });

//         }
//     };


//     return (
//         <div className="Democontainer">
//             <div className="DemoImage">
//                 <img src={person.image} width={350} height={450} />
//             </div>

//             <div>
//                 <dl>
//                     <dt>User Name</dt>
//                     <dd>{person.name}</dd><br />
//                     <dt>Gender</dt>
//                     <dd>{person.gender} </dd><br />

//                     <dt>Contact</dt>
//                     <dd>{person.Contact} </dd><br />
//                     <dt>Profile</dt>
//                     <dd>{person.Profile} </dd>
                
//                 </dl>
//                 <button onClick={changeToPriyanka}>Priyanka</button>
//                 <button onClick={changeToDhanveer}>Dhanveer</button>
//                 <br /><br />
//                 <input type="checkbox" onChange={} />
//                 <label>{styletext.text}</label>
//             </div>

//         </div>
//     );
// };

// export default Demo;
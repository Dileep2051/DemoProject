import {useState} from "react";
// import myStore from "../store/store";  // First way of use dispatch by using our store
import {useDispatch} from 'react-redux'; // second way of use dispatch by using dispatch hook
import { cityActionCreator } from "../action/action";

function City(){
    const [city,setCity] = useState()  // created a state
    const dispatch = useDispatch() // Variable 

    const sendCityData = ()=>{
     ///////////////////////////////////////////////////////////////////
        // var cityAction = {
        //     type:"CITY", // in action object their is one mandatory "type"     
        //     payload:city  // In the action object we can send the dat using payload object
        // };

        //  myStore.dispatch(cityAction) // First way
     /////////////////////////////////////////////////////////////////////
     // Maintaining the action object data in seperate action components "actiontypes.js & action.jsx"

         dispatch(cityActionCreator(city));  // Dispatch is using use of dipatch hook //Second way 
    }
    return(
        <div className="container text-center mt-5"> 
            <h3>City Component</h3>
            <input type="text" placeholder="Enter city" 
            onChange={(e)=>{
                setCity(e.target.value)}} />
            <button onClick={sendCityData} className="btn btn-outline-danger mx-3">Submit</button>


        </div>
    );
};

export default City;
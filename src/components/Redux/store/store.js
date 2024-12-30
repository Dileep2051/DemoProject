import { legacy_createStore } from "redux";
import dataReducer from "../reducer/dataReducer";

let myStore =  legacy_createStore(dataReducer);  // Internally this redux is create one store for us,and it will written the reference of that store.
// Just cathing in one variable  let myStore =  legacy_createStore  & export this store

myStore.subscribe(()=>{ 
   console.log(myStore.getState())

});
export default myStore;


//Functionality of subscribe:- 
//Whenever the store get update, internally subscribe call the call back fnctn 

//getState is a predefined function, which will give the data of current store whatever data stored in store
//
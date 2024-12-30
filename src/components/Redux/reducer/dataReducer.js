let initialData = {
    name:"",
    city:"",
    electronicdata:[],
    jewellerydata:[],
    addtocart: []
}
const dataReducer = (state = initialData, action)=>{    //state,action => 2 parameters(Parameter Names are not mandatory)
    if (action.type === "NAME"){
        state = {
            ...state, // Spread Operator [It is for copying the both property name:"",city:""]
            name:action.payload
        };
    } else if (action.type === "CITY"){
        state = {
            ...state,  // Copying previous properties
            city: action.payload,    // Then updating city property by using "action.payload" in payload sending city 
        }; 
    } else if (action.type === "ELECTRONICS"){
        state = {
            ...state,
            electronicdata : action.payload,
        }
    } else if (action.type === "ADDTOCART"){
        state = {
            ...state,
            addtocart : [...state.addtocart, action.payload]
        }
    }

    return state;   // whatever return in the reducer, that will go and store in redux store means mentioned object stored in redux

};

export default dataReducer;
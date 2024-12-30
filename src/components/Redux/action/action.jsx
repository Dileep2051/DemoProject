import { CITY, ELECTRONICS, ADDTOCART } from "../actiontypes/actiontypes";

export let cityActionCreator = (data) => {
    return {
        type: CITY,
        payload: data,
    };
};
export let electronicActionCreator = (data) =>{
    return {
        type:ELECTRONICS,
        payload:data
    }

};

export let AddToCartActionCreator = (data) =>{
    return {
        type: ADDTOCART,
        payload:data
    }
}

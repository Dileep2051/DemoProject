import {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { electronicActionCreator } from "../Redux/action/action";


function Electronics(props){
    const [electronicdata,setElectronicData]= useState([])   // once we receive the data from server we will add that data in state.
    const dispatch = useDispatch();

        useEffect(()=>{           // useEffect hook is like a fnctn, this hook is take 2 arguments 1-call back. 2-empty array
           getElectronicData();   // Calling the fnctn 
        },[])

        const getElectronicData = ()=>{
            axios
            .get("https://fakestoreapi.com/products/category/electronics")   // get the data from the server
            .then((res)=>{                                                // axios.get()will written one promise object {res is parameter}
                console.log(res.data);                                    // Receives the data 
                setElectronicData(res.data);
                dispatch(electronicActionCreator(res.data));
            }).catch(()=>{                 // If getting any error, in that we can handle catch & also take one call back                    
                alert("Failed to fetch the data")   // giving the message to user, while getting issue to fetching the data from server
            })

        }
    return(
        <div>
            <h2>Electronic component</h2>
            {
                electronicdata.lenght > 0 ? ( <div> 
                    <ul>
                        {
                            electronicdata.map((product)=>{   // product = {id,title,disc,price} [object]
                                return (
                                    <li className="mt-3"> 
                                        <Link 
                                          to={`/productdetails/${product.id}/${product.price}`}  // This path shows in URL row
                                         className="text-primary text-decoration-null"> 
                                         {product.title}
                                        </Link> 
                                    </li>
                                );
                            })
                        }
                    </ul>
                    
                    </div> 
                    ) : ( <h3 className="mt-5 text-center text-danger"> No Data </h3> )
            }

        </div>
    );
};

export default Electronics; 



/////////////////////////////////////////////////////////
// Code written by using JavaScript

// function Electronics(props){
//     const [electronicdata,setElectronicData]= useState([])   // once we receive the data from server we will add that data in state.

//         useEffect(()=>{           // useEffect hook is like a fnctn, this hook is take 2 arguments 1-call back. 2-empty array
//            getElectronicData();   // Calling the fnctn 
//         },[])

//         const getElectronicData = ()=>{
//             axios
//             .get("https://fakestoreapi.com/products/category/electronics")   // get the data from the server
//             .then((res)=>{                                                // axios.get()will written one promise object {res is parameter}
//                 console.log(res.data);                                    // Receives the data 
//                 setElectronicData(res.data);
//             }).catch(()=>{                 // If getting any error, in that we can handle catch & also take one call back                    
//                 alert("Failed to fetch the data")   // giving the message to user, while getting issue to fetching the data from server
//             })

//         }
//     return(
//         <div>
//             <h2>Electronic component</h2>
//             {
//                 electronicdata.lenght > 0 ? ( <div> 
//                     <ul>
//                         {
//                             electronicdata.map((product)=>{   // product = {id,title,disc,price} [object]
//                                 return (
//                                     <li className="mt-3"> 
//                                         <Link 
//                                           to={`/productdetails/${product.id}/${product.price}`}  // This path shows in URL row
//                                          className="text-primary text-decoration-null"> 
//                                          {product.title}
//                                         </Link> 
//                                     </li>
//                                 );
//                             })
//                         }
//                     </ul>
                    
//                     </div> 
//                     ) : ( <h3 className="mt-5 text-center text-danger"> No Data </h3> )
//             }

//         </div>
//     );
// };

// export default Electronics; 
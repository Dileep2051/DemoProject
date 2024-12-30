import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { AddToCartActionCreator } from "../Redux/action/action";


function ProductDetails(props){
   const { id } = useParams(); //access the id value from the pathParameter
   const dispatch = useDispatch()
   const product  = useSelector((state)=>{   // This is array part
        return state.electronicdata.filter((product)=> product.id == id);
      });
    const addtocart = ()=>{
        dispatch(AddToCartActionCreator(product[0]));
    };

    
    return(
        <div className="container">
            {/* <h3>Product Details:{pathParams.id}</h3>
            <h3>Product Details:{id}</h3>  */}
            
            <div className="row text-center mb-5">
                <h3 className="text-uppercase text-primary">{product.category} CATEGORY</h3>
            </div>

            <div className="row">
                <div className="4">
                    <img src={product.image} width="80%" height="250" />
                </div>
                <div className="8">
                    <dl>
                    <dt>Product Title</dt> 
                    <dd>{product[0].title}</dd>
                    <dt>Product Price</dt> 
                    <dd>{product[0].price}</dd>
                    <dt>Product Rating</dt> 
                    <dd>{product[0].rating}</dd>
                    <dt>Product Description</dt> 
                    <dd>{product[0].description}</dd>
                    </dl>
                    <button className="btn btn-outline-primary me-5" 
                      onClick={()=>{
                        addtocart()
                      }}>Add-to-Cart</button>
                    <button className="btn btn-outline-danger">Back to Products </button>
                </div> 
            </div>
        </div>
    );
};

export default ProductDetails;

// dt = Data Term
// dd = Data Definition


/////////////////////////////////////////////////////////////////////////////
// Code written by using JavaScript 

// function ProductDetails(){
//     const [product,setProduct] = useState({
//         id:0,
//         price:"",
//         title:"",
//         rating:{},
//         desc:"",
//         image:"",
//         category:""
//     })
//     let pathParams = useParams();  // pathParams = {id:8} (We can de-structure like as 7th line)
//     // let {id} = useParams();    

//        useEffect(()=>{
//         axios.get(`https://fakestoreapi.com/products/${pathParams.id}`)
//         .then((res)=>{                  // then = promisse object
//             console.log(res.data)  // the data will reflects in Console
//             setProduct(res.data)  // once we receive the data from server, we will update our screen
//         })
//        },[])
    
//     return(
//         <div className="container">
//             {/* <h3>Product Details:{pathParams.id}</h3>
//             <h3>Product Details:{id}</h3>  */}
            
//             <div className="row text-center mb-5">
//                 <h3 className="text-uppercase text-primary">{product.category} CATEGORY</h3>
//             </div>

//             <div className="row">
//                 <div className="4">
//                     <img src={product.image} width="80%" height="250" />
//                 </div>
//                 <div className="8">
//                     <dl>
//                     <dt>Product Title</dt> 
//                     <dd>{product.title}</dd>
//                     <dt>Product Price</dt> 
//                     <dd>{product.price}</dd>
//                     <dt>Product Rating</dt> 
//                     <dd>{product.rating}</dd>
//                     <dt>Product Description</dt> 
//                     <dd>{product.description}</dd>
//                     </dl>
//                     <button className="btn btn-outline-primary me-5">Add-to-Cart</button>
//                     <button className="btn btn-outline-danger">Back to Products </button>
//                 </div> 
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

// // dt = Data Term
// // dd = Data Definition
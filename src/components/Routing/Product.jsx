import React from "react";
import {Link, Outlet} from "react-router-dom"; 
//Outlet is like a container which is hold our components. 


function Product(props){
    return(
        <div className="container mt-2"
        style={{ boxShadow:"0 0 10px black", height:"400px", width:"1200px" }}>
            <div className="row">
                <div className="col-4 bg-dark text-primary"
                 style={{ 
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"space-evenly",
                    alignItems:"center",
                    height:"400px"
                 }}>
                    
                    <Link to="electronics" className="text-white text-decoration-none">
                     Electronics </Link> 
                     
                    <Link to="jewellery" className="text-white text-decoration-none">
                     Jewellery </Link> 
                     
                    <Link to="mensclothing" className="text-white text-decoration-none">
                     MensClothing </Link> 
                     
                    <Link to="womensclothing" className="text-white text-decoration-none">
                     Women'sClothing </Link> 

                </div>
                <div className="col-8 "> 
                    <Outlet/> 
                </div>

            </div>

        </div>
    );
};

export default Product;
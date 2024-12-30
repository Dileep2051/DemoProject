import { useState } from "react";

function Products1(){
    let [product, setProduct]= useState(100);

    const getProduct=() => {                            //Fetch will written PROMISE
    
        fetch("https://fakestoreapi.com/products")
         .then((res)=>{
            return res.json();
         })
         .then((data)=>{
            console.log(data);
            setProduct(data);
         })
         .catch(()=>{
            alert("Failed to Fetch Product Details");
        });   
    };


    return(
        <div style={{ padding:"50px" }}> 
            <h2>Products Table Component</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptates non quas excepturi debitis error ad sunt ducimus, delectus, qui accusamus dolores dignissimos impedit nemo voluptatum soluta quis voluptatibus voluptate!</p>
            <button onClick={getProduct} >Get Products</button>

            {product.length > 0 && ( 

                <div style={{ marginTop:"50px", width:"1000px" }} >
                  <table style={{ width:"850px", margin:"auto", }} 
                    cellPadding="20px" 
                    frame="box" 
                    rules="all" >
                    <thead  style={{ background:"black", color:"cornsilk" }} >
                        <tr>
                            <th>ID</th>
                            <th>IMAGE</th>
                            <th>TITLE</th>
                            <th>PRICE</th>
                            <th colSpan={2} >ACTION</th>
                        </tr>

                    </thead>

                    <tbody style={{ textAlign:"center" }} >
                        {product.map((ele)=>{
                                return(
                                    <tr >
                                        <td> 
                                            {ele.id}
                                        </td>
                                        <td>
                                            <img src={ele.image} width={70} height={70} alt="Products image" />
                                        </td>
                                        <td>
                                            {ele.title}
                                        </td>
                                        <td>
                                            ${ele.price}
                                        </td>
                                        <td>
                                            <button>Details</button>
                                        </td>
                                        <td><button>Delete</button></td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                 </table>
                </div>

            )}


        </div>
    )
}

export default Products1;
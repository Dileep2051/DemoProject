
import React, { useState } from "react";

//////////By using Bind or Map method Rows are Creating Dynamically based on the number of products ///////////////

function Products (){

    let [products, setProducts] = useState ([{
        image:"https://th.bing.com/th?id=OIP.z0ATztHK_koH9KGMP3A_PAAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"Mac Book Pro",
        price:240000,
        rating:4.5,
    },{
        image:"https://th.bing.com/th?id=OIP.4S6_LzyyjPjlxrIkmmiixgAAAA&w=247&h=252&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"Samsung Galaxy S3 Ultra",
        price:140000,
        rating:4.9,

    },{
        image:"https://th.bing.com/th?id=OIP.JPvp9ph3z7rH4fveRnhDRgHaI9&w=227&h=275&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"One Plus Nord CE3",
        price:38000,
        rating:4.7,
    },{
        image:"https://th.bing.com/th?id=OIP.bZQpHUp1gpZF102q09kZTQHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"MI Note 13 Pro Max",
        price:32000,
        rating:4.6,
    },{
        image:"https://th.bing.com/th?id=OIP.nvdM5sEm4DqG8oZb8nNStQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"Iphone 13",
        price:39999,
        rating:4.4,
    }]);



    return (
        <div style={{padding:"50px"}}>

            <h2>Products Details</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima, repellendus natus vel vitae magni aut incidunt debitis dicta temporibus minus laborum quisquam ipsa illum quas ipsam error eveniet dolores ratione facilis veritatis ex. Molestias omnis sequi exercitationem eum beatae dolores recusandae saepe ratione, est cupiditate vero maiores doloremque odit?</p>

                 <div>
                    <table cellPadding="10px" style={{ width:"1000px" , margin:"50px auto"}}>
                        <thead style={{ background:"black", color:"White", padding:"20px" }} >
                            <tr>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>RATING</th>
                            </tr>
                        </thead>

                        <tbody style={{ textAlign:"center",  }} >
                            { products.map((ele)=>{                 // Map Method
                                return (
                                    <tr>
                                        <td>
                                            <img src={ele.image} width={70} height={70} />
                                        </td>
                                        <td>{ele.name} </td>
                                        <td>{ele.price}</td>
                                        <td>{ele.rating}</td>
                                    </tr>
                                )
                            })}
               
                        </tbody>
                    </table>
                 </div>

        </div>
    );
};

export default Products;







////////////////////////////////////////////////////////////////////////////////////

// function Products (){

//     let [products, setProducts] = useState ([{
//         image:"https://th.bing.com/th?id=OIP.z0ATztHK_koH9KGMP3A_PAAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
//         name:"Mac Book Pro",
//         price:240000,
//         rating:4.5,
//     },{
//         image:"https://th.bing.com/th?id=OIP.4S6_LzyyjPjlxrIkmmiixgAAAA&w=247&h=252&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
//         name:"Samsung Galaxy S3 Ultra",
//         price:140000,
//         rating:4.9,

//     },{
//         image:"https://th.bing.com/th?id=OIP.JPvp9ph3z7rH4fveRnhDRgHaI9&w=227&h=275&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
//         name:"One Plus Nord CE3",
//         price:38000,
//         rating:4.7,
//     },{
//         image:"https://th.bing.com/th?id=OIP.bZQpHUp1gpZF102q09kZTQHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
//         name:"MI Note 13 Pro Max",
//         price:32000,
//         rating:4.6,
//     },{
//         image:"https://th.bing.com/th?id=OIP.nvdM5sEm4DqG8oZb8nNStQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
//         name:"Iphone 13",
//         price:39999,
//         rating:4.4,
//     }]);





//     return (
//         <div style={{padding:"50px"}}>

//             <h2>Products Details</h2>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima, repellendus natus vel vitae magni aut incidunt debitis dicta temporibus minus laborum quisquam ipsa illum quas ipsam error eveniet dolores ratione facilis veritatis ex. Molestias omnis sequi exercitationem eum beatae dolores recusandae saepe ratione, est cupiditate vero maiores doloremque odit?</p>

//                  <div>
//                     <table cellPadding="10px" style={{ width:"1000px" , margin:"50px auto"}}>
//                         <thead style={{ background:"black", color:"White", padding:"20px" }} >
//                             <tr>
//                                 <th>IMAGE</th>
//                                 <th>NAME</th>
//                                 <th>PRICE</th>
//                                 <th>RATING</th>
//                             </tr>
//                         </thead>

//                         <tbody style={{ textAlign:"center",  }} >
//                             <tr>
//                                 <td>
//                                     <img src={products[0].image} width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     {products[0].name}
//                                 </td>
//                                 <td>
//                                     {products[0].price}
//                                 </td>
//                                 <td>
//                                     {products[0].rating}
//                                 </td>
//                             </tr>

//                             <tr>
//                             <td>
//                                     <img src={products[1].image} width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     {products[1].name}
//                                 </td>
//                                 <td>
//                                     {products[1].price}
//                                 </td>
//                                 <td>
//                                     {products[1].rating}
//                                 </td>
//                             </tr>

//                             <tr>
//                             <td>
//                                     <img src={products[2].image} width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     {products[2].name}
//                                 </td>
//                                 <td>
//                                     {products[2].price}
//                                 </td>
//                                 <td>
//                                     {products[2].rating}
//                                 </td>
//                             </tr>

//                             <tr>
//                             <td>
//                                     <img src={products[3].image} width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     {products[3].name}
//                                 </td>
//                                 <td>
//                                     {products[3].price}
//                                 </td>
//                                 <td>
//                                     {products[3].rating}
//                                 </td>
//                             </tr>

//                             <tr>
//                             <td>
//                                     <img src={products[4].image} width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     {products[4].name}
//                                 </td>
//                                 <td>
//                                     {products[4].price}
//                                 </td>
//                                 <td>
//                                     {products[4].rating}
//                                 </td>
//                             </tr>

//                         </tbody>
//                     </table>
//                  </div>

//         </div>
//     );
// };

// export default Products;





///////////////////////////////////////////////////////////////////////////////

//////////Rows Creating Manually///////////////

// function Products (){

//     return (
//         <div style={{padding:"50px"}}>

//             <h2>Products Details</h2>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima, repellendus natus vel vitae magni aut incidunt debitis dicta temporibus minus laborum quisquam ipsa illum quas ipsam error eveniet dolores ratione facilis veritatis ex. Molestias omnis sequi exercitationem eum beatae dolores recusandae saepe ratione, est cupiditate vero maiores doloremque odit?</p>

//                  <div>
//                     <table cellPadding="10px" style={{ width:"1000px" , margin:"50px auto"}}>
//                         <thead style={{ background:"black", color:"White", padding:"20px" }} >
//                             <tr>
//                                 <th>IMAGE</th>
//                                 <th>NAME</th>
//                                 <th>PRICE</th>
//                                 <th>RATING</th>
//                             </tr>
//                         </thead>

//                         <tbody style={{ textAlign:"center",  }} >
//                             <tr>
//                                 <td>
//                                     <img src="https://th.bing.com/th?id=OIP.z0ATztHK_koH9KGMP3A_PAAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2" width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     Macbook Pro
//                                 </td>
//                                 <td>
//                                     240000
//                                 </td>
//                                 <td>
//                                     4.5
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <td>
//                                     <img src="https://th.bing.com/th?id=OIP.JPvp9ph3z7rH4fveRnhDRgHaI9&w=227&h=275&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2" width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     One Plus Nord C3
//                                 </td>
//                                 <td>
//                                     38000
//                                 </td>
//                                 <td>
//                                     4.7
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <td>
//                                     <img src="https://th.bing.com/th?id=OIP.27Bk7A7H_KfWrbrD6TA2FQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2" width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     Macbook 
//                                 </td>
//                                 <td>
//                                     200000
//                                 </td>
//                                 <td>
//                                     4.3
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <td>
//                                     <img src="https://th.bing.com/th?id=OIP.4S6_LzyyjPjlxrIkmmiixgAAAA&w=247&h=252&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2" width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     Galaxy Pro S3ultra
//                                 </td>
//                                 <td>
//                                     140000
//                                 </td>
//                                 <td>
//                                     4.9
//                                 </td>
//                             </tr>

//                             <tr>
//                                 <td>
//                                     <img src="https://th.bing.com/th?id=OIP.bZQpHUp1gpZF102q09kZTQHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2" width={70} height={70} />
//                                 </td>
//                                 <td>
//                                     MI NOTE 13Pro
//                                 </td>
//                                 <td>
//                                     26000
//                                 </td>
//                                 <td>
//                                     4.6
//                                 </td>
//                             </tr>

//                         </tbody>
//                     </table>
//                  </div>

//         </div>
//     );
// };

// export default Products;`
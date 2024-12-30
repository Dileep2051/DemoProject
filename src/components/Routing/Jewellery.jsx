import { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Jewellery(props){
    const [jewellerydata,setJewelleryData] = useState([])
    
    useEffect(()=>{
        getJewelleryData();
    },[])

    const getJewelleryData = ()=>{
        axios
        .get(`https://fakestoreapi.com/products/category/jewelery`)
        .then((res)=>{
            console.log(res.data);
            setJewelleryData(res.data);
        })
        .catch(()=>{
            alert("Failed to fetch the data")
        })
    }

    
    return(
        <div>
            <h3>Jewellery Component</h3>
            {
                jewellerydata > 0 ? ( <div> 
                   <ul>
                     {
                        jewellerydata.map((product)=>{
                            return (
                            <li>
                                <Link 
                                    to={`/productdetails/${product.id}/${product.price}`}
                                    className="text-primary text-decoration-null"
                                 >{product.title}
                                </Link>
                            </li>
                            )
                        })
                     } 
                   </ul>
                </div>) : ( <h2 className="mt-5 text-center text-danger">No Data</h2>)
            }

        </div>
    );
};

export default Jewellery;
import { useSelector } from "react-redux";

function Cart(){
    let cartData = useSelector((state)=>{
        return state.addtocart;
    })
    return(
        <div className="container mt-5">
            {
                cartData.lenghth > 0 &&
                cartData.map((cartproduct)=>{
                    return <div className="row" key={cartproduct.id} 
                    style={{ boxShadow: "0 0 10px black", padding:"15px" }} >
                        <div className="col-4">
                            <img src={cartproduct.image} width="100%" height="200px" />
                        </div>
                        <div className="col-8">
                            <h4>{cartproduct.title}</h4>
                            <p>${cartproduct.price}</p>
                            <button className="btn btn-outline-primary">Remove Product</button>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default Cart;
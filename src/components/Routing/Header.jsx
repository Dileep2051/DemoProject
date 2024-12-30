import { useSearchParams } from "react-router-dom";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props){   
    return (
        <div className="container text-secondary " style={{
            height:"70px",
            background:" linear-gradient(45deg, black, darkred, black)",
            display: "flex",
            width:"100%"
        }} >
            
            <div className="title" >
                <h1>Routing Concept</h1>

            </div>

            <div className="menu text-secondary " >
                <Link to="/">HOME</Link>
                <Link to="/product">Product</Link>
                <Link to="/profile">PROFILE</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/countreducer">CountReducer</Link>
                <Link to="/cart" >Cart</Link>
            </div>
        </div>
    );
}

export default Header;
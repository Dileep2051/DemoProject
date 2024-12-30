import "./Header.css";

function Header(){   
const { isloggedin,logout }  =  useContext(AuthContext);

    return (
        <div className="container" >
            <div className="title" >
                <h1>Context Concept</h1>

            </div>

            <div className="menu" >
                <a href="#">HOME</a>
                <a href="#">Products</a>
                <a href="#">PROFILE</a>
                <a href="#">CONTACT</a>
                {isloggedin ? <button onClick={()=>{logout}} >Logout</button> : null}
                
               
                
            </div>
        </div>
    );
}

export default Header;
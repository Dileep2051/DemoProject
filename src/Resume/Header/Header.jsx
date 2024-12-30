import "./Header.css";

function Header(){
    return (
        <div className="container">
            <div className="title">
                <h2>Portfolio</h2>
            </div>

            <div className="menu">
                <a href="#">Profile</a>
                <a href="#">Project</a>
                <a href="#">Contact</a>
                <a href="#">Help</a>
            </div>
        </div>
    );
}

export default Header;
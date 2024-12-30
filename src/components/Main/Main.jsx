import "./Main.css";
import Pics from "./Pics";

function Main(){
    return(
        <div className="mainContainer" >
            <div className="section1" >
                <div className="imageContainer">
                    <img src="https://th.bing.com/th/id/OIP.CoNS9ydt0717WFChhNkO9QHaHa?pid=ImgDet&w=176&h=176&c=7&dpr=1.5" />
                </div>

                <div className="contentContainer">
                    <h4>Hi There!!</h4>
                    <h2>I'm Sneha</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sequi aliquid laborum, praesentium distinctio aut quas temporibus dicta minus blanditiis! </p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi omnis, labore vitae velit atque, nihil magnam animi nesciunt eos ullam, illum corporis vel ipsam fugiat maiores optio ipsa? Odit, harum placeat. Soluta alias quia dignissimos beatae quibusdam nam, et libero asperiores quo rem nulla suscipit. Laborum quisquam obcaecati dicta rerum. </p>
                    <p> <b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, impedit amet cupiditate nisi sit eligendi. Facere eos ipsa molestias nesciunt. </b> </p>
                </div>
            </div>



            <div className="section2" >

                <Pics image="https://th.bing.com/th/id/OIP.5JqwfZNVHsfKvQARhM_fnQHaHa?w=512&h=512&rs=1&pid=ImgDetMain" title="Profile" />
                <Pics image="https://th.bing.com/th/id/OIP.gdiRkZrZ0tgyHFCPj2ygBwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7" title="Resume" />
                <Pics image="https://th.bing.com/th/id/OIP.CmrmZTeoqrjW-raMZ9_QhAHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7" title="Project" />
                <Pics image="https://th.bing.com/th/id/OIP.a9fENmm_b5XFRWLjZDV7TwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7" title="Contact" />

            </div>
        </div>
        
    );
}

export default Main;
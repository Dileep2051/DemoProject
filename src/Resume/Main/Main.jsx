import "./Main.css";
import Image from "./Image";

function Main(){
    return (
        <div className="mainContainer">
            <div className="section1">
                <div className="imageContainer">
                    <img src="https://th.bing.com/th/id/OIP.CoNS9ydt0717WFChhNkO9QHaHa?pid=ImgDet&w=176&h=176&c=7&dpr=1.5" width="250px" height="250px" />
                </div>

                <div className="detailsContainer">
                    <h3>Hi there....!</h3>
                    <h1>I'm Reema Singh</h1>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis beatae ducimus quaerat voluptates possimus, eaque ipsa, maxime, voluptatibus cupiditate corporis nulla veniam. Hic, beatae dolore?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia esse a tenetur unde reprehenderit atque aliquid alias dolore officiis excepturi.</p>
                    <p><b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur quibusdam sapiente laudantium autem ullam doloribus optio non esse amet molestiae.</b></p>
                </div>

            </div>

            <div className="section2">
                <Image image="https://th.bing.com/th/id/OIP.5JqwfZNVHsfKvQARhM_fnQHaHa?w=512&h=512&rs=1&pid=ImgDetMain" title="Profile"/>
                <Image image="https://th.bing.com/th/id/OIP.gdiRkZrZ0tgyHFCPj2ygBwHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7" title="Project" />
                <Image image="https://th.bing.com/th/id/OIP.CmrmZTeoqrjW-raMZ9_QhAHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.5&pid=1.7" title="Contact" />
                <Image image="https://th.bing.com/th/id/OIP.a9fENmm_b5XFRWLjZDV7TwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.5&pid=1.7" title="Mail" />

            </div>

        </div>
    );
}

export default Main;
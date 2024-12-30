import React from "react";
import "./Carousel.css";

// Bootstrap
// Carousel ==>main Container 
// [Here add the indicator button cmd]
// Carousel-inner ==> Sub container
// Carousel-item
// <UI/> [images]
//[Here means at last inside carosuel div & outside of courosel-inner div, add the previous and next buttons cmd]

function Carousel(props){
    return(
        <div className="carousel slide" id="#mycarousel">
            <div className="carousel-indicators">
                <button
                data-bs-target='#mycarousel'
                className="active"
                data-bs-slide="0"
                aria-label="Slide 1"
                
                ></button>
                <button
                data-bs-target='#mycarousel'
                data-bs-slide="1"
                aria-label="Slide 2"
                ></button>
                <button
                data-bs-target='#mycarousel'
                data-bs-slide="2"
                aria-label="Slide 3"
                ></button>
            </div>

            <div className="carousel-inner" data-bs-interval="2000" data-bs-ride="carousel">
                <div className="carousel-item active mt-4 ">
                    <img src="https://ashokitech.com/assets/banners/Java%20Fullstack.jpg" 
                    height="400px"
                    width="100%" />
                    <div className="carousel-caption text-light">
                     <h3>Java Script</h3>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem assumenda neque illum vero ex, debitis odio recusandae ab possimus velit perferendis doloremque, minima error esse.</p>
                    </div>
                </div>

                <div className="carousel-item  mt-4 ">
                    <img src="https://ashokitech.com/assets/banners/Spring%20boot.jpg" 
                    height="400px"
                    width="1300px" />
                    <div className="carousel-caption">
                        <h3>Spring Boot</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, iure suscipit minus quasi eaque quibusdam?</p>
                    </div>
                </div>
                <div />

                <div className="carousel-item mt-4 ">
                    <img src="https://ashokitech.com/assets/banners/Software%20Testing.jpg" 
                    height="400px"
                    width="1300px" />
                    <div className="carousel-caption">
                        <h3>Angular</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nisi quia atque consequuntur ullam vitae. Eaque nisi officia saepe officiis?</p>
                    </div>
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#mycarousel"
                data-bs-slide="prev"
                
                ><span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#mycarousel"
                  data-bs-slide="next"
                  
            >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
            </button>

        </div>
    );
};

export default Carousel;
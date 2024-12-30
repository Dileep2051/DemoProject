import React from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import Details from "../Details/Details";



function Home(props){
    return(
        <div className="container"  >
            <div className="row">

               <div className="col-12">
                 <Search/>
               </div>
                
            </div>

            <div className="row">
                <div className="col-4">
                    <Profile/>
                    

                </div>
                <div className="col-8">
                    <Details/>
                    

                </div>
            </div>

        </div>
    );
};

export default Home;
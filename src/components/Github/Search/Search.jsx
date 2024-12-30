import React from "react";

function Search(props){
    return(
        <div className="container row mt-5">
            <div className="col-12">
                <h3 className="text-primary">Github Search</h3>
            </div>
            <div className="col-8 ">
                <input type="text" placeholder="Enter Github Username" className="form-control" />
            </div>

            <div className="col-4">
                <button className="btn btn-outline-primary">Search</button>

            </div>

        </div>
    );
};

export default Search;
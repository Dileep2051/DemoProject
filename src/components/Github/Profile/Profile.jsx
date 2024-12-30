import React from "react";

function Profile(props){
    return(
        <div className="mt-5 card text-bg-primary">
            <img src="https://th.bing.com/th/id/OIP.Rv5hzhHxzYHGKELo5TzKFQHaLH?w=117&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" className="card-img-top" width={350} height={400} />
            <div className="card-body">
             <h3 className="card-title">Gavaskar Varma</h3>
             <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, rem!</p>
             <a href="" className="btn btn-danger col-8 ms-5">Profile</a>
            </div>
        </div>
    );
};

export default Profile;
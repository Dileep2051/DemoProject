import React from "react";

function Login(){
    return(
        <div className="container" >
            <div className="row mt-3">
                <div className="col-4"></div>
                <div className="col-6">
                    <form >
                      <input className="form-control" type="text" placeholder="User Name" />
                    
                        <div className="mt-2">
                            <input className="form-control" type="password" placeholder="Password" />
                        </div>
                        <div className=" mt-2">
                            <input type="radio" name="gender" className="form-check-input" /> Male
                            <input type="radio" name="gender" className="form-check-input mx-2" /> Female
                        </div>
           
                        <div className="form-switch mt-3">
                            <input type="checkbox" className="form-check-input" />HTML
                        </div>

                        <div className="mt-3">
                            <input type="checkbox" /> switch To Dark
                        </div>

                        <div className="text-center mt-2">
                            <input type="button" value="Login" className="btn btn-primary px-4" />
                        </div>

                        <div className="mt-4">
                            <textarea className="form-control" rows={5} cols={50}></textarea>
                        </div>

                        <div>

                            <select className="mt-2 form-select form-se;ect-md ">
                                <option >Select City</option>
                                <option >Delhi</option>
                                <option >Mumbai</option>
                                <option >Karnataka</option>
                                <option >Hyderabad</option>
                            </select>
                        </div>
                    </form>       
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
};

export default Login;
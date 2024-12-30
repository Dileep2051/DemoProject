import React from "react";

function ModalComp(props){
    return(
        <div className="m-5">
            <button 
            className="btn btn-primary" 
            data-bs-target="#mymodal" 
            data-bs-toggle="modal"
            >Open Model</button>

            <div className="modal" id="#mymodal" data-bs-backdrop="static">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" >
                     <div className="modal-content">
                        <div className="modal-header">
                            <h2>Model Title</h2>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptate dolorum aliquid numquam, veniam quo pariatur amet. Obcaecati eaque veniam nulla architecto vel? Numquam vitae cum rerum cumque exercitationem accusantium sint quos, hic impedit nisi molestias ad fugiat, ipsam, dolorum quisquam! Velit accusantium ipsam, nisi eum voluptatum voluptatibus sed aliquam.</p>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-danger" data-bs-dismiss="modal"
                            >Cancel</button>
                            <button className="btn btn-primary">Proceed</button>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default ModalComp;
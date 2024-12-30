import React from "react";


function PaginationComp(){
    return(
        <div className="text-primary m-5">
            <h2>Pagination Component</h2>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link">Previous</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">1</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">3</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">4</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">5</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">Next</a>
                </li>
            </ul>

            <h3>Pagination Active Page</h3>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link">Previous</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">1</a>
                </li>

                <li className="page-item">
                    <a href="#" className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">3</a>
                </li>
                <li className="page-item active">   
                    <a href="#" className="page-link">4</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">5</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">6</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">Next</a>
                </li>
            </ul>

            <h3>Pagination With Disable</h3>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#"className="page-link">Previous</a>
                </li>
                <li className="page-item disabled">
                    <a href="#"className="page-link">1</a>
                </li>

                <li className="page-item ">
                    <a href="#"className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="#"className="page-link">3</a>
                </li>
                <li className="page-item active">
                    <a href="#"className="page-link">4</a>
                </li>
                <li className="page-item">
                    <a href="#"className="page-link">Next</a>
                </li>
            </ul>


            <h2>Pagination with different Size-large</h2>
            <ul className="pagination pagination-lg">
                <li className="page-item">
                    <a href="#"className="page-link">Previous</a>
                </li>
                <li className="page-item disabled">
                    <a href="#"className="page-link">1</a>
                </li>

                <li className="page-item ">
                    <a href="#"className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="#"className="page-link">3</a>
                </li>
                <li className="page-item active">
                    <a href="#"className="page-link">4</a>
                </li>
                <li className="page-item">
                    <a href="#"className="page-link">Next</a>
                </li>
            </ul>
            <h2>Pagination with different Size-medium</h2>
            <ul className="pagination pagination-md">
                <li className="page-item">
                    <a href="#"className="page-link">Previous</a>
                </li>
                <li className="page-item disabled">
                    <a href="#"className="page-link">1</a>
                </li>

                <li className="page-item ">
                    <a href="#"className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="#"className="page-link">3</a>
                </li>
                <li className="page-item active">
                    <a href="#"className="page-link">4</a>
                </li>
                <li className="page-item">
                    <a href="#"className="page-link">Next</a>
                </li>
            </ul>

            <h2>Pagination with different Size-small </h2>
            <ul className="pagination pagination-sm">
                <li className="page-item">
                    <a href="#"className="page-link">Previous</a>
                </li>
                <li className="page-item disabled">
                    <a href="#"className="page-link">1</a>
                </li>

                <li className="page-item ">
                    <a href="#"className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="#"className="page-link">3</a>
                </li>
                <li className="page-item active">
                    <a href="#"className="page-link">4</a>
                </li>
                <li className="page-item">
                    <a href="#"className="page-link">Next</a>
                </li>
            </ul>



        </div>
    );
};

export default PaginationComp;

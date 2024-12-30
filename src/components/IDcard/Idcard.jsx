import "./Idcard.css";


function Idcard(props){
    return (
        <div className="Idcard">
            <img src={props.image} width="150px" height="250px" />
            <h3> {props.id} </h3>
            <h3> {props.name} </h3>
            <p> {props.gender} </p>
            <button style={{ boxShadow: "0 0 10px blue", border: "1px solid red" }} >Profile</button>
        </div>
    );
}

export default Idcard;
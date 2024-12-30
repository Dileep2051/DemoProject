import "./Photo.css";

function Photo(props){
    return (
        <div className="id">
            <img src={props.image} width="150px" height="200px" />
            <h3>{props.id}</h3>
            <h2> {props.name} </h2>
            <h4> {props.gender} </h4>
            <button> Profile </button>

        </div>
    )
}

export default Photo;
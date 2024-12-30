

function Pics(props){
    return (
        <div>
            <img src={props.image} width="120px" height="120px" />
            <h3> {props.title} </h3>
        </div>
    );
}

export default Pics;
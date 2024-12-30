

function Image(props){
    return (
        <div>
            <img src={props.image} width="150px" height="150px"/>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Image;
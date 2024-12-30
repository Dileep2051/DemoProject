import "./Card.css";

function Card(props){
    return(
        <div className="card" >
            <img src={props.image} width="150px" height="150px" />
            <h3> {props.id} </h3>
            <h3> {props.name} </h3>
            <p> {props.gender} </p>
            <button>Profile</button>
        </div>
    );
}

export default Card;


////////////////////////////////////////////////


function Card(){

    let [user, setUser] = (
        setUser({
            name: "Priyanka",
            gender: "Female",
            Contact: "100",
            Profile: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, ipsam.",
            image: "https://th.bing.com/th/id/OIP.T7cSCDcC8fujFCg67x1xuQHaIy?w=200&h=238&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        })
    );

    const changeToDhanveer = () => ({
        name: "Dhanveer",
        gender: "Male",
        Contact: "200",
        Profile: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, ipsam.",
        image: "https://th.bing.com/th/id/OIP.VbSwV0yD0HD3Ks5Kq69cowHaNK?w=187&h=333&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    });

    const changeToPriyanka = () => ({
        name: "Priyanka",
            gender: "Female",
            Contact: "100",
            Profile: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, ipsam.",
            image: "https://th.bing.com/th/id/OIP.T7cSCDcC8fujFCg67x1xuQHaIy?w=200&h=238&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    })


    return (
        <div>
            <div>
                <img src="" width={350} height={450} />
            </div>
            <div>
                <dl>
                    <dt>User Name</dt>
                    <dd>{}</dd><br />
                    <dt>Gender</dt>
                    <dd>{} </dd><br />

                    <dt>Contact</dt>
                    <dd>{} </dd><br />
                    <dt>Profile</dt>
                    <dd>{} </dd>
                
                </dl>
                <button>Priyanka</button>
                <button>Dhanveer</button>
                <br /><br />
                <input type="checkbox" />
                <label>Check the switch to Dark Mode</label>
            </div>

        </div>
    );
};





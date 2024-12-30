import { useState } from "react";


function Productscard() {

    let [card, setCard] = useState([{
        image:"https://th.bing.com/th?id=OIP.z0ATztHK_koH9KGMP3A_PAAAAA&w=306&h=204&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"Mac Book Pro",
        price:240000,
        rating:4.5,
    },{
        image:"https://th.bing.com/th?id=OIP.4S6_LzyyjPjlxrIkmmiixgAAAA&w=247&h=252&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"Samsung Galaxy S3 Ultra",
        price:140000,
        rating:4.9,

    },{
        image:"https://th.bing.com/th?id=OIP.JPvp9ph3z7rH4fveRnhDRgHaI9&w=227&h=275&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"One Plus Nord CE3",
        price:38000,
        rating:4.7,
    },{
        image:"https://th.bing.com/th?id=OIP.bZQpHUp1gpZF102q09kZTQHaEc&w=322&h=193&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"MI Note 13 Pro Max",
        price:32000,
        rating:4.6,
    },{
        image:"https://th.bing.com/th?id=OIP.nvdM5sEm4DqG8oZb8nNStQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&cb=13&dpr=1.5&pid=3.1&rm=2",
        name:"Iphone 13",
        price:39999,
        rating:4.4,
    },{
        image:"https://th.bing.com/th/id/OIP.IJBJkXEnICDFJaNi1QgrdQHaJW?w=162&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        name:"MI Note 13 Pro",
        price:28000,
        rating:4.4,
    }]);

    return(
        <div style={{ padding:"50px" }} >
            <h2>Products Card</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores consequatur accusamus nobis aut accusantium fuga. Ad dolorum ab mollitia, eveniet placeat tempore facere temporibus cum, ratione doloremque rerum natus nam.</p>

            <div style={{ display:"grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px"  }}>
                {
                    card.map((ele)=>{
                        return <div style={{ width:"270px", boxShadow:"0 0 10px black", padding:"10px",  }}>
                            <img src={ele.image} width="100%" height="250px" />
                            <h3>{ele.name}</h3>
                            <p>{ele.price}</p>
                            <button>Product Details</button>

                               </div>
                    })

                    
                        
                };

            </div>

        </div>
    )
};

export default Productscard;
interface item{
    name: string;
    isPacked: boolean;
}

// function Item({name,isPacked}:item){
//     if(isPacked){
//         // return <li className="item">{name}  ✔</li>
//         return null;
//     } else {
//         return <li className="item">{name}</li>
//     }
// }

function Item({name,isPacked}:item){
    return <li className="item">{isPacked? name +  "✔":name}</li>
}

export default function PackingList(){
    return(
        <section>
            <h1>Sally Ride's Packing List</h1>
            <Item isPacked={true} name="Space suit"/>
            <Item isPacked={true} name="Helmet with a golden leaf"/>
            <Item isPacked={false} name="Photo of Tam"/>
        </section>
    )
}
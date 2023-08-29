interface Person{
    name: string;
    imageId: string;
}

interface AvatarType{
    size?: number;
    person:Person;
}


export default function Avatar({person,size =500}:AvatarType){
    const avatar = `https://i.imgur.com/${person.imageId}.jpg`
    const description = "avatar img"

    return(
        <div>
            <h1>{person.name}</h1>
            <img className="avatar" src={avatar} alt={"Shing Yang"} width={size} height={size} />
        </div>
    )
}
interface Person{
    name: string;
    imageId: string;
}

interface PropType{
    size?: number;
    person:Person;
}
import Avatar from "./Avatar";

export default function Profileprop(props:PropType){
    return(
// size is optional
        <Avatar {...props} />
    
    )
}
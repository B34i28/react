"use client"

interface button2{
    children: string,
    message: string
}

function AlertButton({message,children}:button2){
    return (
        <button onClick={()=>{alert(message)}}>
            {children}
        </button>
    )
}

export default function Toolbar(){
    return(
        <div>
            <AlertButton message="Playing">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading">
                Upload Image
            </AlertButton>
        </div>
    )
}
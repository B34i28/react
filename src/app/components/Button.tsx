"use client"

export default function Button(){

    function handleClick(){
        alert("You Clicked Me")
    }

    return(
        <div>
            <button>I Am doing nothing</button>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}
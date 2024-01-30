"use client"
import { useState } from "react"



export default function SnapShot(){

    const [number , setNumber] = useState(0)

    return(
        <div>

            <h1 className=" bg-gray-200 p-3 mr-96">{number}</h1>
            <button onClick={()=>{
                setNumber(number + 1);
                setNumber((number)=>(number +1));
                setNumber((number) => (number +1));
            }} className="bg-cyan-200 p-3">+3</button>

            <button onClick={()=>{
                setNumber(number - 1);
            }} className="bg-cyan-400 p-3">-1</button>

        </div>
    )
}
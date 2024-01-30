'use client'
import { useReducer } from "react"

function reducer( state:any , action:any ){
    if (action.type === 'increment age'){
        return {
            age : state.age + 1
        };
    } else if (action.type === "decrement age"){
        return {
            age : state.age - 1
        }
    }
    throw Error("UnKnown error")
}


export default function Counter(){

    const [ state , dispatch ] = useReducer( reducer , { age : 35 })

    return(
        <div>
            <button onClick={ () =>{
                dispatch({ type : 'increment age' })
            }}>Increment Age</button>
            <button onClick={ () =>{
                dispatch({ type : 'decrement age' })
            }}>Decrement Age</button>
            <p>Hello Your Age is {state.age}</p>
        </div>
    )
}
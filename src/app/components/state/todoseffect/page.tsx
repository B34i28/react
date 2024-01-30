'use client'

export default async function Todos(){
    
    const getData = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await getData.json()
        

    return (
        <div>
            {data.title}
        </div>
    )
}
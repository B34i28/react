"use client"
import { useState } from "react"

export default function FaqCard () {

    const [isOpen,setIsOpen] = useState(false)

    const handleIsOpen = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <div onClick={handleIsOpen} className="px-5 py-6 bg-blue-500 text-white ">
                <h1 className="text-xl">Questions about commercial licence</h1>
            </div>
            
            <div className={`bg-blue-700 text-white overflow-hidden duration-300 ${isOpen? "max-h-48":"max-h-0"}`}>
                <p className="px-4 py-4">This is the answer and paragraph of the questions</p>
            </div>
            
        </div>
    )
}
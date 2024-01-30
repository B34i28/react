'use client'
import {sculptureList} from '../data/data';
import {useState} from 'react'

export default function SculpGallery() {
  const [index , setindex] = useState(0)

  function handleClick() {
    setindex(index + 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button className='bg-slate-400 border-4 ml-2' onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </>
  );
}

import React, { useEffect, useState } from 'react'
import Characters from '../components/Characters'

export default function Home() {
  const [characters, setCharacters] = useState([]);

  const url1= "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url: RequestInfo | URL) =>{
  fetch(url)
    .then(response=> response.json())
    .then(data => setCharacters(data.results))
    .catch(error=> console.log(error))
  };

  useEffect(()=>{
    fetchCharacters(url1)
  }, []) 

  return (
    <div className='container mt-5'>
    <Characters characters={characters} />
   </div>
  )
}

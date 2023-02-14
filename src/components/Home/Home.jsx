import React, {useState} from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';


const Home = () => {
    const  [characters, setCharacters]  = useState([]);  
  
    const onClose = (id) => {
      setCharacters(characters.filter((element) => element.id !== id));
    };
    
  return (
    <div>
      <Card characters={characters} onClose={onClose}/>
    </div>
  )
}

export default Home

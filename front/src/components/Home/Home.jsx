import React, {useState} from 'react'
import Up from '../Up/Up';
import Card from './Card'


const Home = () => {
    const  [characters, setCharacters]  = useState([]);  
  
    const onClose = (id) => {
      setCharacters(characters.filter((element) => element.id !== id));
    };
    
  return (
    <div>
      <Card characters={characters} onClose={onClose}/>
      <Up/>
    </div>
  )
}

export default Home

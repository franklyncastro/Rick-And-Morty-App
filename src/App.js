import './App.css'
import About from './Componentes/About'
import Card from './Componentes/Card'
import Cards from './Componentes/Cards'
import Nav from './Componentes/Nav'
import SearchBar from './Componentes/SearchBar'
import characters, { Rick } from './data'
import { Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav/>
      
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <div>
        <SearchBar
          onSearch={(characterID) => alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
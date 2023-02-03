import './App.css'
import Cards from './components/Cards.jsx'
import characters, { Rick } from './data.js'
import Nav from './components/Nav.jsx'

function App () {
  return (
    <div className='App'>
      <div>
        <Nav/> 
       
      </div>
      <hr />
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr />
      <div>
       
      </div>
    </div>
  )
}

export default App

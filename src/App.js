import "./App.css";
import { useState } from "react";
import { About } from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import {Routes, Route, useLocation} from "react-router-dom"
import { Detail } from "./components/Details/Detail";
import {Error} from './components/Error/Error'
import Form from "./components/Form/Form";
// import characters, { Rick } from './data.js'

function App() {
  const  [characters, setCharacters]  = useState([]);
  const location = useLocation();
  

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID.");
        } else {
          alert("No hay personajes con ese ID.");
        }
      });
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    console.log(randomId);
    onSearch(randomId);
  }

  const onClose = (id) => {
    setCharacters(characters.filter((element) => element.id !== id));
  };

  return (
    <div className="App">
      {location.pathname === '/' ? <Form/> : <Nav onSearch={onSearch} random={random} />}
      {/* <div>
        <Nav onSearch={onSearch} random={random} />
      </div> */}

      <div>
      <Routes>
        <Route  path="/home" element={ <Cards characters={characters} onClose={onClose} />}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path='/detail/:id' element={<Detail/>}/>
        <Route path="/:error" element={<Error/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

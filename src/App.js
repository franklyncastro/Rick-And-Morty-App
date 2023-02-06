import "./App.css";
import { About } from "./components/About";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import {Routes, Route} from "react-router-dom"
import { Detail } from "./components/Detail";
// import characters, { Rick } from './data.js'

function App() {
  const  [characters, setCharacters]  = useState([]);

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
      <div>
        <Nav onSearch={onSearch} random={random} />
      </div>

      <div>
      <Routes>
        <Route path="/" element={ <Cards characters={characters} onClose={onClose} />}/>
        <Route exact path='/detail/:detailId' element={<Detail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/datail/:detailID" element={<Detail/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { useState, useEffect } from "react";
import { About } from "./components/About/About";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Detail } from "./components/Details/Detail";
import { Error } from "./components/Error/Error";
import Form from "./components/Form/Form";
import { Favorite } from "./components/Favorite/Favorite";
// import characters, { Rick } from './data.js'

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "fadmin@dev.com";
  const password = "Developer";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      // con este trozo de codigo evito que me regrese al login al momento de actualizar la pagina
      const token = "my-auth-token";
      localStorage.setItem("authToken", token);

      setAccess(true);
      navigate("/home");
      alert("Bienvenido a la App de Rick And Morty");
    } else {
      alert("Usuario o contraceña incorrecta");
    }
  };

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      setAccess(true);
    } else {
      setAccess(false);
      navigate('/');
    }
  }, []);

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
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} random={random} />
      )}

      <div>
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/:error" element={<Error />} />
          <Route path="/favorite" element={<Favorite/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

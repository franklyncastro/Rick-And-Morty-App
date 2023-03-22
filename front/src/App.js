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
import Up from "./components/Up/Up";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  // Alert personalizado
  const [alertMessage, setAlert] = useState("");

  // user and password Login
  const username = "fadmin@dev.com";
  const password = "Developer2023";

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
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setAccess(true);
    } else {
      setAccess(false);
      navigate("/");
    }
  }, [access]);

  const onSearch = (id) => {
    fetch(`http://localhost:3001/rickandmorty/onSearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          characters.find((e) => e.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : setAlert("Personaje repetido");
              setTimeout(() => setAlert(""), 3000);
        } else {
          // alerta que se muestra por 2 segundos usando useEffect
          setAlert("No hay personajes con ese ID");
          setTimeout(() => setAlert(""), 2000);
        }
      });
  };

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    console.log(randomId);
    onSearch(randomId);
  }

  const onClose = (id) => {
    setCharacters(characters.filter((e) => e.id !== id));
  };

  return (
    <div className="App">
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} random={random} />
        )}
        <Up/> 
      <div className="alertContainer">
        {alertMessage && (
          <div className="alert animate__animated animate__headShake">
            <span>{alertMessage}</span>
          </div>
        )}
      </div>

      <div>
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/:error" element={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

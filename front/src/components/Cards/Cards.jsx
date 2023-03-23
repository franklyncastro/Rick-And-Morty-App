// import { Link } from "react-router-dom";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import React from "react";
import "./animaciones.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {characters.length === 0 ? (
        <div className="containerPtext">
          <p className="animate__animated animate__backInDown animate__delay-0.5s pText">
            ¡Agrega un personaje!
          </p>
          <p className="animate__animated animate__backInDown animate__delay-1s pText">
            Puedes agregar un personaje buscando su id por el momento
          </p>
          <p className="animate__animated animate__backInDown animate__delay-2s pText">
            Tambien lo puedes hacer generando un personaje de forma aleatoria
          </p>
        </div>
      ) : (
        characters.map((character) => (
          <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            id={character.id}
            onClose={() => onClose(character.id)}
          />
        ))
      )}
    </div>
  );
}

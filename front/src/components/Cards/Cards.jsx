// import { Link } from "react-router-dom";
import Card from "../Card/Card";
import style from "./Cards.module.css";
import React from "react";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {characters.length === 0 ? (
        <p
          style={{
            color: "violet",
            marginTop: "150px",
            fontSize: "26px",
            textAlign: "center",
          }}
          className="animate__animated animate__backInDown"
        >
          ¡Agrega un personaje! <br />
          Puedes agregar un personaje buscandolo por su id <br />
          Tambien lo puedes hacer generando un personaje de forma aleatoria
        </p>
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

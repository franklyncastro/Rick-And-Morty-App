import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Favorite.module.css";
// import { Link } from "react-router-dom";
import Card from "../Card/Card";

export const Favorite = () => {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div>
      <div className={style.container}>
        <div>
          <h1 className={style.h1Fav}>Favoritos</h1>
        </div>
        <div className={style.containerCards}>
          {/* Con esta  */}
          {myFavorites.length === 0 ? (
            <p
              style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}
              className="animate__animated animate__backInDown"
            >
              ¡Agrega un favorito!
            </p>
          ) : (
            myFavorites.map((character) => (
              <Card
                key={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                id={character.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Favorite.module.css";
// import { Link } from "react-router-dom";
import Card from "../Card/Card";

export const Favorite = (onClose) => {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div>
      <div className={style.container}>
        <div>
          <h1 className={style.h1Fav}>Favoritos</h1>
        </div>
        <div className={style.containerCards}>
          {myFavorites.map((character) => (
            <Card
              key={character.id}
              name={character.name}
              species={character.species}
              gender={character.gender}
              image={character.image}
              id={character.id}
              onClose={() => onClose(character.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

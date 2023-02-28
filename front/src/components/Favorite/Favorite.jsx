import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Favorite.module.css";
import { Link } from "react-router-dom";

export const Favorite = () => {
  const { myFavorites } = useSelector((state) => state);
  

  return (
    <div>
      {myFavorites.map((character) => {
        return (
            <div className={style.allContainer}>
            <div className={style.container}>
            <div className={style.containerCard}>
              <Link to={`/detail/${character.id}`}>
                <h2 className={style.textInfo}>Detalle</h2>
              </Link>
              <dir className={style.containerImg}>
                <img src={character.image} alt="img not found" />
              </dir>
              <h2 className={style.nameText}>{character.name}</h2>
              <div className={style.containerText}>
                <h2 className={style.textInfo}>{character.species}</h2>
                <h2 className={style.textInfo}>{character.gender}</h2>
              </div>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};

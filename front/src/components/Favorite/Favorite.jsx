import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import style from "./Favorite.module.css";
import { Link } from "react-router-dom";
import './animaciones.css'

export const Favorite = () => {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div className={style.container}>
      {myFavorites.map((char) => {
        return (
          <div >
            <div className={style.containerCard}>
              <div className={style.btnContainer}></div>
              <span className="animate__animated animate__bounce corazon"> ❤️ </span>
              <Link to={`/detail/${char.id}`}>
              <h2 className={style.textInfo}>id: {char.id}</h2>
                <h2 className={style.textInfo}>Detalle</h2>
              </Link>
              <div className={style.containerImg}>
                <img src={char.image} alt="img not found" />
              </div>
              <h2 className={style.nameText}>{char.name}</h2>
              <div className={style.containerText}>
                <h2 className={style.textInfo}>{char.species}</h2>
                <h2 className={style.textInfo}>{char.gender}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import img from "../../img/me.jpg";

export default function Nav({ onSearch, random }) {
  // proceso para salir de la app
  const logout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        <img src={img} alt="imagen not found" className={style.photo} />
        <div className={style.links}>
          <Link to="/home" className={style.btn}>
            <i class="fa-solid fa-house"></i> Inicio
          </Link>

          <Link to="/about" className={style.btn}>
            <i class="fa-regular fa-address-card"></i> Sobre mi
          </Link>

          <Link to="/favorite" className={style.btn}>
            <i class="fas fa-heart"></i> Favoritos
          </Link>
        </div>
      </div>

      <div className={style.serachContainer}>
        <SearchBar onSearch={onSearch} random={random} />
        <button className={style.btnExit} onClick={logout}>
          <i class="fa-solid fa-power-off"></i>
        </button>
      </div>
    </div>
  );
}

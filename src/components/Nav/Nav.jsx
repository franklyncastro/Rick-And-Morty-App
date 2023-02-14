import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, random }) {
  return (
    <div className={style.container}>
      <div className={style.containerLogo}> 
      <div className={style.links}>
        <button className={style.btn}>
          <Link to="/home">Home</Link>
        </button>

        <button className={style.btn}>
          <Link to="/about">About</Link>
        </button>
      </div>
      </div>


      <div>
        <SearchBar onSearch={onSearch} random={random} />
      </div>
    </div>
  );
}

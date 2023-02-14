import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({ onSearch, random }) {
  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        <h1 className={style.logo}>Franklyn Dev</h1>
      </div>

      <div className={style.links}>
        <button>
          <Link to="/home">Home</Link>
        </button>

        <button>
          <Link to="/about">About</Link>
        </button>
      </div>

      <div>
        <SearchBar onSearch={onSearch} random={random} />
      </div>
    </div>
  );
}

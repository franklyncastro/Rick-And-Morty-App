import React from "react";
import style from "./SearchBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ onSearch, random }) {
  const [character, setCharacter] = useState(0);

  const handleSearch = (event) => {
    let { value } = event.target;
    setCharacter(value);
  };

 

  return (
    <div className={style.container}>
      <input
        type="search"
        className={style.input}
        placeholder="Buscar"
        onChange={handleSearch}
      />
      <div className={style.containerBtn}>
        
          <span>
            <Link to="/home" onClick={() => onSearch(character)} className={style.btn}>
              Agregar
            </Link>
          </span>
        
          <Link to="/home" className={style.btn} onClick={random}>
            <i class="fa-solid fa-shuffle"></i>
          </Link>
      </div>
    </div>
  );
}

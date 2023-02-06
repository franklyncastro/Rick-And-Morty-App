import style from './SearchBar.module.css';
import { useState } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar({ onSearch, random }) {

  const [character, setCharacter] = useState(0);

  const handleSearch = (event) => {
    let { value } = event.target;
    setCharacter(value);
  };

  return (
    <div className={style.container}>
      <input type="search" className={style.input} placeholder='Buscar'onChange={handleSearch}/>
      <button onClick={()=> onSearch(character)} className={style.btn}><span>
      <Link to='/' className={style.link}>
        Agregar
        </Link>
        </span></button>
      
      <button className={style.btn} onClick={random}>
        <Link to='/' className={style.link}>
        Aleatorio
        </Link>
      </button>
      
    </div>
  );
}

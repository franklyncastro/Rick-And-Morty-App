import React from 'react';
import SearchBar from './SearchBar';
import style from './Nav.module.css';

export default function Nav() {
  return (
    <div className={style.container}>
      <div className={style.containerLogo}>
        <h1 className={style.logo}>
        Franklyn Dev
        </h1>
      </div>
      <div>
        <SearchBar
        onSearch={(characterID) => alert(characterID)}
        />
      </div>
    </div>
  )
}


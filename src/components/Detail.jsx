import React from 'react'
import style from './Detail.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Detail = () => {
  const [character, setCharacter]= useState([]);
  const {id} = useParams();


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <h1>Detalle</h1>
      {
        character.map(charr =>{
          return <li>{charr.name}</li>
        })
      }

       
    </div>
  )
}

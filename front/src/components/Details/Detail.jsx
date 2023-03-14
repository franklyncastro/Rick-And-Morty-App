import React from "react";
import style from "./Detail.module.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


export const Detail = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://localhost:3001/rickandmorty/${id}`)
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
      <h1 className={style.tituloH1}>Detalles del personaje</h1>
      <div className={style.containerH2}>
            <h2 className={style.titloH2}>
               {character.name}
            </h2>
      </div>
      
        <div className={style.container2}>
          <div className={style.containerList}>
            <ul className={style.ul}>
              <li className={style.list}>
                <strong>Status:</strong> {character?.status}
              </li>
              <li className={style.list}>
                <strong>Specie:</strong> {character?.species}
              </li>
              <li className={style.list}>
                <strong>Gender</strong> {character?.gender}
              </li>
              <li className={style.list}>
                <strong>Origin:</strong> {character?.origin?.name}
              </li>
            </ul>
          </div>
          <div className={style.containerImge}>
            <img src={character.image} alt="img not found" className={style.image}/>
          </div>
        </div>

          <Link to='/home' className={style.btn}>Back</Link>
      
    </div>
  );
};

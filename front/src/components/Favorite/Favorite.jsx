import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Favorite.module.css";
import { Link } from "react-router-dom";
import './animaciones.css'
import { filterCards, orderCards } from "../../redux/action";

export const Favorite = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOrder =(e)=>{
    dispatch(orderCards(e.target.value)) 
  }

  const handleFilter =(e)=>{
    dispatch(filterCards(e.target.value))
    console.log(filterCards(e.target.value))
  }

  return (
    <div className={style.container}>
      <div>
        <select onChange={handleOrder}>
            <option value="order" disabled='disabled'>Ordenar por</option>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilter}>
        <option value="Filter" disabled='disabled'>Filtrar por</option>
          <option value="Male">Hombre</option>
          <option value="Female">Mujer</option>
          <option value="Unknown">Desconocido</option>
          <option value="Genderless">Sin Genero</option>
        </select>
      </div>
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

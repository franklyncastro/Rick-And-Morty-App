import React from "react";
import style from "./Error.module.css";
import { Link } from "react-router-dom";
import imagen from '../../img/404.png';

export const Error = () => {
  return (
    <div className={style.container}>
      <img src={imagen} alt='img not found' className={style.imgError}/>
      <div className={style.containerGeneral}>

      <div className={style.containerText}></div>
      <p className={style.textoUps}>Ups</p>
      <p className={style.texto}>
        "Parece que la página que estás buscando se ha movido o ha sido
        eliminada."
      </p>
      <div className={style.containerLink}>
        <Link to="/" className={style.link}>Regresar al inicio</Link>
      </div>
      </div>
    </div>
  );
};



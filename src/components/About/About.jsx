import React from "react";
import style from "./About.module.css";
import img from "../../img/me.jpg";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className={style.container}>
      <h1>About me:</h1>
      <div className={style.containerP}>
        <img src={img} alt="imagen not found" className={style.imagen} />

        <h1>Hi I'm Franklyn Castro</h1>
        <h2 className={style.h2}>FullStack Developer</h2>

        <p>
          "Soy estudiante en Henry y en esta aplicación utilicé todo lo
          aprendido durante el Módulo 2."
        </p>

        <div className={style.containerIcon}>
          <Link
            to="https://github.com/franklyncastro"
            className={`${style.icon} ${style.g}`}
            target="_blank"
          >
            <i class="fa-brands fa-github" target="_blank"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/in/franklyn-yawerlyn-castro-dev/"
            className={`${style.icon} ${style.l}`}
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link
            to="https://bit.ly/3dUQHku"
            className={`${style.icon} ${style.w}`}
            target="_blank"
          >
            <i class="fa-brands fa-whatsapp"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

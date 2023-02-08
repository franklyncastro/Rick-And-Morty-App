import { Link } from "react-router-dom";
import style from "./Card.module.css";
import React from "react";

export default function Card({ image, name, species, gender, onClose, id}) {
  return (
    <div className={style.container}>
      

      
      
      <div className={style.containerCard}>
        <div className={style.btnContainer}>
          {/* Boton Delete */}

          <button onClick={onClose} className={style.btnX}>
            <p className={style.paragraph}> delete </p>
            <span className={style.iconWrapper}>
              <svg
                className={style.icon}
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </button>

          {/* Boton Delete */}
        </div>
        <Link to={`/detail/${id}`}> 
          <h2 className={style.textInfo}>{name}</h2>
        </Link>
        <dir className={style.containerImg}>
            <img src={image} alt="img not found" />
        </dir>
        <h2 className={style.nameText}>{name}</h2>
        <div className={style.containerText}>
          <h2 className={style.textInfo}>{species}</h2>
          <h2 className={style.textInfo}>{gender}</h2>
        </div>
      </div>
      
    </div>
  );
}

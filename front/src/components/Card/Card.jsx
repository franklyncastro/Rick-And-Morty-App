import { Link } from "react-router-dom";
import style from "./Card.module.css";
import React from "react";
//todo => useDispatch es el hook que reemplaza a ("mapDispatchToProps") 
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/action";
import { connect } from "react-redux";



export const Card =({ image, name, species, gender, onClose, id })=> {
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector(state => state.myFavorites);

   const handleFavorite = () => {
    setIsFav(!isFav); // Invertir el valor actual de isFav
    if (!isFav) {
      dispatch(addFavorite({ image, name, species, gender, onClose, id }));
    } else {
      dispatch(deleteFavorite(id));
    }
  };


  useEffect(()=>{
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
    });
  })

  return (
    <div className={style.container}>
      <div className="animate__animated animate__fadeInDown">

      <div className={style.containerCard}>
        <div className={style.btnContainer}>
          <div>
            {isFav ? (
              <button className={style.fav} onClick={handleFavorite}>
                ❤️
              </button>
            ) : (
              <button className={style.fav} onClick={handleFavorite}>
                🤍
              </button>
            )}
          </div>

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
                <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"></path>
              </svg>
            </span>
          </button>

          {/* Boton Delete */}
        </div>
        <Link to={`/detail/${id}`}>
          <h2 className={style.textInfo}>Detalle</h2>
        </Link>
        <div className={style.containerImg}>
          <img src={image} alt="img not found" />
        </div>
        <h2 className={style.nameText}>{name}</h2>
        <div className={style.containerText}>
          <h2 className={style.textInfo}>{species}</h2>
          <h2 className={style.textInfo}>{gender}</h2>
        </div>
      </div>
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: (personaje)=> {
      dispatch(addFavorite(personaje));
    },
    removeFav: (id)=> {
      dispatch(deleteFavorite(id));
    },
  };
}

export default connect(null, mapDispatchToProps)(Card);

import React from "react";
import style from "./Up.module.css";

const Up = () => {
  return (
    <div className={style.containerUpBtn}>
      <button className={style.Up} onClick={() => window.scrollTo(0, 0)}>
        Up
      </button>
    </div>
  );
};

export default Up;

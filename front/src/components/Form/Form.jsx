import React from "react";
import { useState } from "react";
import style from "./Form.module.css";
import { validation } from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
      login(userData);
    e.preventDefault();
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.loader}>
          <div className={style.face}>
            <div className={style.circle}></div>
          </div>
          <div className={style.face}>
            <div className={style.circle}></div>
          </div>
        </div>
        <h1 className={style.h1Login}>Login</h1>
        <div className={style.inputContainer}>
          <div className={style.containerInputs}>
            <input
              type="email"
              name="username"
              placeholder="Ingrese Usuario"
              onChange={handleChange}
              className={style.input}
              value={userData.username}
              required
            />
            {errors.username && <p className={style.warning}>*</p>}
          </div>
          <div className={style.containerInputs}>
            <input
              type="password"
              name="password"
              placeholder="Ingrese Contraceña"
              onChange={handleChange}
              className={style.input}
              value={userData.password}
              required
            />
            {errors.password && <p className={style.warning}>*</p>}
          </div>
          <div>
            <button type="submit" className={style.button}>
              Iniciar
            </button>
          </div>
        </div>
      </form>
      <div className={style.errorContainer}>
        {errors.username && <p className={style.warning2}>{errors.username}</p>}
        {errors.password && <p className={style.warning2}>{errors.password}</p>}
      </div>
    </div>
  );
};

export default Form;

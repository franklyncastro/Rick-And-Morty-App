import React from "react";
import { useState } from "react";
import style from "./Form.module.css";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setForm({
      name: "",
      password: "",
    });
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
          <input
            type="text"
            name="user"
            placeholder="Ingrese Usuario"
            onChange={handleChange}
            className={style.input}
          />
        
          <input
            type="password"
            name="password"
            placeholder="Ingrese Contraceña"
            onChange={handleChange}
            className={style.input}
          />
        <div>
          <button type="submit" className={style.button}>Iniciar</button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

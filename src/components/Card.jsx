import style from "./Card.module.css";

export default function Card({ name, gender, onClose, species, image }) {
  return (
    <div className={style.container}>
      <div className={style.containerCard}>
      <div className={style.btnContainer}>
      <button onClick={onClose}>X</button>
      </div>
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

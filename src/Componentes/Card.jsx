import style from './Card.module.css'


export default function Card({name, gender, onClose, species,image}) {
    return (
       <div className={style.container}>
          <button onClick={onClose}>X</button>
          <div className={style.nameContainer}>
          <h2 className={style.name}>{name}</h2>
          </div>
          <img  src={image} alt="img not found" />
          <div className={style.lastNameContainer}>
          <h2 className={style.other}>{species}</h2>
          <h2 className={style.other}>{gender}</h2>
          </div>
       </div>
    );
 }
 
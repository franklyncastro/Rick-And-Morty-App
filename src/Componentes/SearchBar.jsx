import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
    return (
      <div className={style.container}>
        <input type="search" className={style.input} placeholder='Serach'/>
        <button onClick={onSearch} className={style.btn}>Agregar</button>
      </div>
    );
  }
  
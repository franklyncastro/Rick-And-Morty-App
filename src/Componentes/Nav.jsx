import React from 'react'
import style from './Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className={style.navContainer}>
      <nav className={style.nav}>
        {/* <span>Inicio</span>
        <span>Personajes</span>
        <span>Dimensiones</span>
        <span>Accesorios</span> */}
      <Link to='/'><span>HOME</span></Link>
      <Link to='/about'><span>ABOUT</span></Link>
      
      </nav>
    </div>
  )
}

export default Nav

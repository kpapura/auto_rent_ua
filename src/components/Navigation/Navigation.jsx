import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import clsx from 'clsx'

const Navigation = () => {
  return (
      <div className={s.navContainer}>
        <nav className={s.navBar}>
      <NavLink to='/' className={({ isActive }) => clsx(s.navLink, isActive && s.active)}>Home</NavLink>        
      <NavLink to='/catalog' className={({ isActive }) => clsx(s.navLink, isActive && s.active)}>Catalog</NavLink>        
      <NavLink to='/favorites' className={({ isActive }) => clsx(s.navLink, isActive && s.active)}>Favorites</NavLink>        
        </nav>
    </div>
  )
}

export default Navigation
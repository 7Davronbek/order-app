import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/nav-logo.svg'

export default function Navbar2() {



  return (
    <nav className='Navbar2'>
      <div className="container">
        <div className="nav-body">
        
          <NavLink to='/'>
           
            <img className='nav-logo' src={logo} alt="logo" />
          </NavLink>

          <ul className='nav-links'>
            <li>
              <NavLink to='/'>Главная</NavLink>
            </li>
            <li>
              <NavLink to='/about'>О нас</NavLink>
            </li>
            <li>
              <NavLink to='/products'>Продукция</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Контакты</NavLink>
            </li>
          </ul>

          <div className="nav__toggler">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

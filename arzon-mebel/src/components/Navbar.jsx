import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/nav-logo.svg'

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [active, setActive] = useState('nav-links');

  const[toggleIcon, setToggleIcon] = useState('nav__toggler')
  const navToggle = () =>{
    active === "nav-links"
      ? setActive("nav-links nav__active")
      : setActive('nav-links');
    
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon('nav__toggler')
  };

  const changeNavbar = () => {
    if (window.scrollY >= 70) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeNavbar);


  return (
    <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
      <div className="container">
        <div className="nav-body">
        
          <NavLink to='/'>
           
            <img className='nav-logo' src={logo} alt="logo" />
          </NavLink>

          <ul className={active}>
            <li>
              <NavLink onClick={navToggle} to='/'>Главная</NavLink>
            </li>
            <li>
              <NavLink onClick={navToggle} to='/about'>О нас</NavLink>
            </li>
            <li>
              <NavLink onClick={navToggle} to='/products'>Продукция</NavLink>
            </li>
            <li>
              <NavLink onClick={navToggle} to='/contact'>Контакты</NavLink>
            </li>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/footer-logo.svg'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className='footer-body'>
          <img src={img} alt="logo" />
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/онас">О нас</Link></li>
            <li><Link to="/продукция">Продукция</Link></li>
            <li><Link to="/контакты">Контакты</Link></li>
          </ul>
        </div>
        <div className='footer-bottom'>
          <p className='brand'>XR MATRAS © 2024</p>
          <p>Разработка и реклама <a href="https://www.instagram.com/webmarketing.uz/" target='_blank'>WEB MARKETING</a></p>
        </div>
      </div>
    </footer>
  )
}

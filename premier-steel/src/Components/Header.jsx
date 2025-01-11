import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../Images/header-carusel.jpg'
import img2 from '../Images/header-carusel2.jpeg'
import img3 from '../Images/header-carusel3.jpeg'
import { Link } from 'react-router-dom';
import logo from '../Images/Logo-cropped.svg'
import { useTranslation } from "react-i18next";


export default function Header(changeLang) {

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <header className='Header'>
      <div className="header-info">
        <img className='header-logo' src={logo} alt="logo-text" />
        <p>{t("headerAbout")}</p>
        <Link to="/about-us">{t("moreAbout")}</Link>

      </div>
      <Carousel className='carusel' slide={false}>
        <Carousel.Item className='carusel-item'>
          <img className='carusel-img' src={img3} alt="header-img" />
          {/* <Carousel.Caption className='carusel-caption'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className='carusel-item'>
          <img className='carusel-img' src={img2} alt="header-img" />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */} 
        </Carousel.Item>
        <Carousel.Item className='carusel-item'>
          <img className='carusel-img' src={img} alt="carusel-img" />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </header>
  )
}

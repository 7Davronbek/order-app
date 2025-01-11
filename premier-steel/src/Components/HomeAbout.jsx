import React from 'react'
import img from '../Images/home-about.jpg'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";

export default function HomeAbout(changeLang) {
  
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <section className='HomeAbout'>
      <div className="container">
        <img src={img} alt="nerjoveyka" />

        <div className='about-body'>
          <h2>{t("headerAbout")}</h2>
          <Link to="/about-us">{t("moreAbout")}</Link>

        </div>
      </div>
    </section>
  )
}

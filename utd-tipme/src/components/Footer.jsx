import React from 'react'
import logo from '../images/logo.png'
import location from '../images/icons/location.svg'
import time from '../images/icons/watch.svg'
import tg from '../images/icons/telegram.svg'
import insta from '../images/icons/instagram.svg'
import fc from '../images/icons/facebook.svg'
import { useTranslation } from "react-i18next";


export default function Footer(changeLang) {
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
            <div className="col-md-4">

              <h3 className='mb-3'>{t("footerTittle")}</h3>
              <ul className='socials'>
                <li><img src={tg} alt="socials" /></li>
                <li><img src={insta} alt="socials" /></li>
                <li><img src={fc} alt="socials" /></li>
              </ul>
            </div>
            
            <div className="col-md-4">
                
            </div>
            
            <div className="col-md-4">
              <h3 className='mb-3'>{t("footer1")}</h3>
              <div className="d-flex mb-3">
                <img className='icons' src={location} alt="location" />
                <p>{t("footer2")}</p>
              </div>

              <h3 className='mb-3'>{t("footer3")}</h3>
              <div className="d-flex mb-3">
                <img className='icons' src={time} alt="time" />
                <p>{t("footer4")} <b>{t("footer5")}</b> <br /> {t("footer6")} <b>{t("footer7")}</b></p> 
              </div>
            </div>
            
        </div>
      </div>
    </footer>
  )
}

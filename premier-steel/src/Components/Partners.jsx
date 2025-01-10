import React from 'react'
import logo1 from '../Images/Partners/1.svg'
import logo2 from '../Images/Partners/2.svg'
import logo3 from '../Images/Partners/3.svg'
import logo4 from '../Images/Partners/4.svg'
import logo5 from '../Images/Partners/logo_varim.svg'
import logo6 from '../Images/Partners/6.svg'
import logo7 from '../Images/Partners/7.svg'
import logo8 from '../Images/Partners/8.svg'
import logo9 from '../Images/Partners/9.svg'
import logo10 from '../Images/Partners/10.svg'
import logo11 from '../Images/Partners/11.svg'

import logo12 from '../Images/Partners/12.svg'
import logo13 from '../Images/Partners/13.svg'
import logo14 from '../Images/Partners/14.svg'
import logo15 from '../Images/Partners/logo_korzinka.svg'
import logo16 from '../Images/Partners/16.svg'
import { useTranslation } from "react-i18next";



export default function Partners(changeLang) {
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <section className='Partners'>
      <div className="container">
        <h2>{t("partners")}</h2>
        <div className="partners-logos">

          <div className="p-logos">
            <img src={logo1} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo2} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo3} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo4} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo5} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo6} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo7} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo8} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo9} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo10} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo11} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo12} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo13} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo14} alt="partners-logo" />
          </div>

          <div className="p-logos">
            <img src={logo15} alt="partners-logo" />
          </div>

        </div>
      </div>
    </section>
  )
}

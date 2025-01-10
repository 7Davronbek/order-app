import React from 'react'
import icon1 from '../Images/Icons/primushestva1.svg'
import icon2 from '../Images/Icons/primushestva2.svg'
import icon3 from '../Images/Icons/primushestva3.svg'
import icon4 from '../Images/Icons/primushestva4.svg'
import { Fade } from 'react-reveal'
import { useTranslation } from "react-i18next";


export default function Primushestva(changeLang) {

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <section className='Primushestva'>
      <div className="container">
        <h2>{t("primushestva")}</h2>
        <div className="row">
          <div className="col-md-3 pr-body">
            <img src={icon1} alt="primushestva" />
            <Fade top>
              <p>{t("primushestva1")}</p>
            </Fade>
          </div>

          <div className="col-md-3 pr-body">
            <img src={icon2} alt="primushestva" />
            <Fade top>
              <p>{t("primushestva2")}</p>
            </Fade>
          </div>

          <div className="col-md-3 pr-body">
            <img src={icon3} alt="primushestva" />
            <Fade top>
              <p>{t("primushestva3")}</p>
            </Fade>
          </div>

          <div className="col-md-3 pr-body">
            <img src={icon4} alt="primushestva" />
            <Fade top>
              <p>{t("primushestva4")}</p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

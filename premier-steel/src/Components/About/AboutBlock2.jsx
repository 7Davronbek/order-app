import React from 'react'
import img1 from '../../Images/ventilatsiya1.jpg'
import img2 from '../../Images/ventilatsiya2.jpg'
import img3 from '../../Images/ventilatsiya3.jpg'
import { Fade } from 'react-reveal'
import { useTranslation } from "react-i18next";


export default function AboutBlock2(changeLang) {
  const { t } = useTranslation();
    const changeLanguage = (e)=>{
      changeLang(e.target.value)
      localStorage.setItem("LANGUAGE", e.target.value)
    }
  return (
    <section className='AboutBlock'>
      <div className="container">
        <h2>{t("lazerTittle2")}</h2>
        <div className="row">
          <div className="col-md-6">
            <Fade left>
              <img src={img1} alt="lazer" />
            </Fade>
          </div>
          <div className="col-md-6">
            <Fade top>
              <img className='mb-4' src={img2} alt="lazer" />
            </Fade>
            <Fade bottom>

              <img src={img3} alt="lazer" />
            </Fade>
          </div>
        </div>
      </div>  
    </section>
  )
}

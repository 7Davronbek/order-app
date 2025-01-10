import React from 'react'
import img1 from '../Images/gotovy1.jpg'
import img2 from '../Images/gotovy2.jpg'
import img3 from '../Images/gotovy3.jpg'
import { Fade } from 'react-reveal'
import { useTranslation } from "react-i18next";

export default function GotovyProduct(changeLang) {
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <section className='GotovyProduct'>
      <div className="container">
        <div className="row">
          <h2>{t("complectTittle")}</h2>
          <Fade left>
            <div className="col-md-6">
              <div className="card">
                <img src={img1} alt="nerjovika" />
                <div className='rank'>Аксессуары</div>
              </div>
            </div>
          </Fade>


          <div className="col-md-6">
            <Fade top>
              <div className="col-12">
                <div className="card card1">
                  <img src={img2} alt="nerjovika" />
                  <div className='rank'>Кейтеринг</div>
                </div>
              </div>
            </Fade>

            <Fade bottom>
              <div className="col-12">
                <div className="card">
                  <img src={img3} alt="nerjovika" />
                  <div className='rank'>Готовые решения</div>
                </div>
              </div>
            </Fade>

            
          </div>


        </div>
      </div>
    </section>
  )
}

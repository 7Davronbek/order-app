import React from 'react'
import img1 from '../../Images/Personal/1.jpg'
import img2 from '../../Images/Personal/2.jpg'
import img3 from '../../Images/Personal/3.jpg'
import img4 from '../../Images/Personal/4.jpg'
import img5 from '../../Images/Personal/5.jpg'
import img6 from '../../Images/Personal/6.jpg'
import { useTranslation } from "react-i18next";


export default function Personal(changeLang) {
  const { t } = useTranslation();
    const changeLanguage = (e)=>{
      changeLang(e.target.value)
      localStorage.setItem("LANGUAGE", e.target.value)
    }

  return (
    <section className='Personal'>
      <div className="container">
        <h2>Работадатели</h2>
        <div className="personal-body">
          <div className="card">
            <img src={img1} alt="personal" />
            <div className="card-body">
              <h3>{t("person1")}</h3>
              <p>{t("director")}</p>
            </div>
          </div>

          <div className="card">
            <img src={img2} alt="personal" />
            <div className="card-body">
            <h3>{t("person2")}</h3>

              <p>{t("bugalter")} </p>
            </div>
          </div>

          <div className="card">
            <img src={img3} alt="personal" />
            <div className="card-body">
            <h3>{t("person3")}</h3>

              <p>{t("menejer")}</p>
            </div>
          </div>

          <div className="card">
            <img src={img4} alt="personal" />
            <div className="card-body">
            <h3>{t("person4")}</h3>

              <p>{t("constructor")} </p>
            </div>
          </div>

          <div className="card">
            <img src={img5} alt="personal" />
            <div className="card-body">
            <h3>{t("person5")}</h3>

              <p>{t("zapusk")} </p>
            </div>
          </div>

          <div className="card">
            <img src={img6} alt="personal" />
            <div className="card-body">
            <h3>{t("person6")}</h3>

              <p>{t("menejer")} </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

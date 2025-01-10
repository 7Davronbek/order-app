import React from 'react'
import { useTranslation } from "react-i18next";


export default function AboutHead(changeLang) {

  const { t } = useTranslation();
    const changeLanguage = (e)=>{
      changeLang(e.target.value)
      localStorage.setItem("LANGUAGE", e.target.value)
    }

  return (
    <section className='AboutHead'>
      <div className="container">
        <h2>{t("about")}</h2>
        <h3>{t("aboutInfo")}</h3>
      </div>
    </section>
  )
}

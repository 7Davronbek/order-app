import React from 'react'
import { useTranslation } from "react-i18next";

export default function Testvy(changeLang) {

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }
  return (
    <div className='Testvy'>
      <div className="container">
        <div class="loading">
          <svg width="64px" height="48px">
              <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
            <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
          </svg>
          <h3>{t("test")}</h3>
        </div>
      </div>
    </div>
  )
}

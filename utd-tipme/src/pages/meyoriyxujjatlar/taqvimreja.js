import React from 'react'
import pdf from '../../images/icons/pdf-icon.svg'
import { useTranslation } from "react-i18next";


export default function Taqvimreja(changeLang) {
  const { t } = useTranslation();

  const changeLanguage = (e) => {
    changeLang(e.target.value);
    localStorage.setItem("LANGUAGE", e.target.value);
  };

  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className="tittle">{t("xujjatlar6")}</h2>

        <div className="row">

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4>Марказ кафедралари таквим режаси</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/taqvim1.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/taqvim1.pdf" download="">
                    <button className='download'>{t("darssave")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4>1-ултратовуш диагностикаси кафедраси режаси</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/taqvim2.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/taqvim2.pdf" download="">
                    <button className='download'>{t("darssave")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  )
}

import React from 'react'
import pdf from '../../images/icons/pdf-icon.svg'
import { useTranslation } from "react-i18next";


export default function Markazbuyruqlari(changeLang) {
 
  const { t } = useTranslation();

  const changeLanguage = (e) => {
    changeLang(e.target.value);
    localStorage.setItem("LANGUAGE", e.target.value);
  };

  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className="tittle">{t("markazTittle")}</h2>

        <div className="row">

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4>05.12.2021 yil. N 63</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/markaz-buyruqlari.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/markaz-buyruqlari.pdf" download="">
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

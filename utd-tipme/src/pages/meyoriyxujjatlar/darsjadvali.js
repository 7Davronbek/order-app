import React from 'react'
import pdf from '../../images/icons/pdf-icon.svg'
import { useTranslation } from "react-i18next";


export default function Darsjadvali(changeLang) {

  const { t } = useTranslation();

  const changeLanguage = (e) => {
    changeLang(e.target.value);
    localStorage.setItem("LANGUAGE", e.target.value);
  };
  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className="tittle">{t("darsTittle")}</h2>

        <div className="row">

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4>{t("dars1")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval1.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dars-jadval1.pdf" download="">
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
                  <h4>{t("dars2")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval2.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dars-jadval2.pdf" download="">
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
                  <h4>{t("dars3")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval3.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dars-jadval3.pdf" download="">
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
                  <h4>{t("dars4")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval4.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dars-jadval4.pdf" download="">
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
                  <h4>{t("dars5")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dars-jadval5.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dars-jadval5.pdf" download="">
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

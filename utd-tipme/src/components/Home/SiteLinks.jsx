import React from 'react'
import gerb from '../../images/gerb.png'
import gov from '../../images/gov.png'
import { useTranslation } from "react-i18next";


export default function SiteLinks(changeLang) {

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }
  return (
    <section className='SiteLinks'>
      <div className="container">
        <h2 className='tittle'> {t("sitetittle")}</h2>
        <div className="row">

         

          <div className="col-md-4 mb-3">
            <a target='_blank' href="https://gov.uz/ru/ssv">
              <div data-aos="fade-up" className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <img className='link-img' src={gerb} alt="gerb" />
                    <h4>{t('siteLink1')}</h4>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 mb-3">
            <a target='_blank' href="https://president.uz/oz">
              <div data-aos="fade-up" className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <img className='link-img' src={gerb} alt="gerb" />
                    <h4>{t('siteLink1')}</h4>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-4 mb-3">
            <a target='_blank' href="https://my.gov.uz/oz">
              <div data-aos="fade-up" className="card">
                <div className="card-body">
                  <div className="d-flex">
                    <img className='link-img' src={gov} alt="gov" />
                    <h4>{t('siteLink1')}</h4>
                  </div>
                </div>
              </div>
            </a>
          </div>

          

        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { PureIncrement, PureDecrement } from 'pure_counter';
import { useTranslation } from "react-i18next";

export default function Results(changeLang) {

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <section className='Results'>
      <div className="container">
        <h2 className='tittle'>{t("resultsTittle")}</h2>
        <div className="row">

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={90} duration={2} className="purecounter" /></h1> {t("resultsCardbody1")}</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card white">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={5} duration={2} className="purecounter" /></h1> {t("resultsCardbody2")}</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={71.6} duration={2} className="purecounter" />%</h1> {t("resultsCardbody3")}</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card white">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={5} duration={2} className="purecounter" /></h1> {t("resultsCardbody4")}</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={5} duration={2} className="purecounter" /></h1> {t("resultsCardbody5")}</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card white">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={3} duration={2} className="purecounter" /></h1> {t("resultsCardbody6")}</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={27} duration={2} className="purecounter" /></h1> {t("resultsCardbody7")}</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card white">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={52} duration={2} className="purecounter" /></h1> {t("resultsCardbody8")}</h4>
              </div>
            </div>
          </div>

          <div className="mb-4 col-md-4">
            <div className="card blue">
              <div className="card-body">
                <h4><h1><PureIncrement start={0} end={208} duration={2} className="purecounter" /></h1> {t("resultsCardbody9")}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

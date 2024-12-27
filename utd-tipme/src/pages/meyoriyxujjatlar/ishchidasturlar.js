import React from 'react'
import pdf from '../../images/icons/pdf-icon.svg'
import { useTranslation } from "react-i18next";


export default function Ishchidasturlar(changeLang) {
  const { t } = useTranslation();

  const changeLanguage = (e) => {
    changeLang(e.target.value);
    localStorage.setItem("LANGUAGE", e.target.value);
  };

  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className="tittle">{t("xujjatlar5")}</h2>

        <div className="row">

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4>{t("workingPrograms1")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi1.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi1.pdf" download="">
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
                  <h4>{t("workingPrograms2")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi2.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi2.pdf" download="">
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
                  <h4>{t("workingPrograms3")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi3.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi3.pdf" download="">
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
                  <h4>{t("workingPrograms4")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi4.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi4.pdf" download="">
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
                  <h4>{t("workingPrograms5")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi5.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi5.pdf" download="">
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
                  <h4>{t("workingPrograms6")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi6.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi6.pdf" download="">
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
                  <h4>{t("workingPrograms7")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi7.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi7.pdf" download="">
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
                  <h4>{t("workingPrograms7")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi8.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi8.pdf" download="">
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
                  <h4>{t("workingPrograms7")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi9.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi9.pdf" download="">
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
                  <h4>{t("workingPrograms7")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi10.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi10.pdf" download="">
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
                  <h4>{t("workingPrograms7")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi11.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi11.pdf" download="">
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
                  <h4>{t("workingPrograms8")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi12.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi12.pdf" download="">
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
                  <h4>{t("workingPrograms9")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi134.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi134.pdf" download="">
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
                  <h4>{t("workingPrograms10")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi14.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi14.pdf" download="">
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
                  <h4>{t("workingPrograms11")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi15 .pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi15 .pdf" download="">
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
                  <h4>{t("workingPrograms12")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi16.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi16.pdf" download="">
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
                  <h4>{t("workingPrograms13")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi17.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi17.pdf" download="">
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
                  <h4>{t("workingPrograms14")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi18.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi18.pdf" download="">
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
                  <h4>{t("workingPrograms15")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/ishchi19.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/ishchi19.pdf" download="">
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

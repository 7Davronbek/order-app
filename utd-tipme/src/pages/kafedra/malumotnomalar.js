import React from 'react'
import doc from '../../images/icons/doc.svg'
import docx from '../../images/icons/docx.svg'
import { useTranslation } from "react-i18next";




export default function Malumotnomalar(changeLang) {

  const { t } = useTranslation();

  const changeLanguage = (e) => {
    changeLang(e.target.value);
    localStorage.setItem("LANGUAGE", e.target.value);
  };

  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className="tittle">{t('kafedra4')}</h2>
        <div className="row">

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix1")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/abdufattev-ulugbek.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={docx} alt="pdf-icon" />
                  <h4>{t("tarix3")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix2.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix5")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix3.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix7")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix4.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={docx} alt="pdf-icon" />
                  <h4>{t("tarix9")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix5.docx">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={docx} alt="pdf-icon" />
                  <h4>{t("tarix11")} </h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix6.docx">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix13")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix7.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={docx} alt="pdf-icon" />
                  <h4>{t("tarix15")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix8.docx">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix17")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix9.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix19")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix10.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix21")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix11.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix23")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix12.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix25")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix12.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={docx} alt="pdf-icon" />
                  <h4>{t("tarix27")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix13.docx">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix29")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix14.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix31")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix15.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix33")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix16.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix35")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix17.doc">
                    <button className='view'>{t("tarix2")}</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={doc} alt="pdf-icon" />
                  <h4>{t("tarix37")}</h4>  
                </div>
                <div className='d-flex'>
                  <a download='' href="/tarix18.doc">
                    <button className='view'>{t("tarix2")}</button>
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

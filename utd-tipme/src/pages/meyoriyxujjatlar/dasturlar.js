import React from 'react'
import pdf from '../../images/icons/pdf-icon.svg'
import { useTranslation } from "react-i18next";


export default function Dasturlar(changeLang) {


  const { t } = useTranslation();

  const changeLanguage = (e) => {
    changeLang(e.target.value);
    localStorage.setItem("LANGUAGE", e.target.value);
  };
  return (
    <div className='dasturlar'>
      <div className="container">
        <h2 className='tittle'>{t("dasturTittle")}</h2>
        <div className="row">

          <div className="col-12 mb-2">
            <div className="card">
              <div className="card-body">
                <div className='d-flex'>
                  <img src={pdf} alt="pdf-icon" />
                  <h4>{t("dastur1")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar1.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar1.pdf" download="Fetal exokardiografiya asoslari">
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
                  <h4>{t("dastur2")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar2.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar2.pdf" download="Ultratovush mammografiyasida BI-RADS tasniflanishining klinik qo'llanilishi">
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
                  <h4>{t("dastur3")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar3.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar3.pdf" download="Bachadon miomasining ultratovush diagnostikasi">
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
                  <h4>{t("dastur4")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar4.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar4.pdf" download="Tuxumdonlar hosilalarini tashxizlashda O-RADS tasniflanishining klinik qo' llanilishi">
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
                  <h4>{t("dastur5")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar5.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar5.pdf" download="Urgent holatdagi bemorlarda FAST, BLUE, RUSH ultratovush tekshirish protokollarining qo'llanilishi">
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
                  <h4>{t("dastur6")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar6.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar6.pdf" download="Klinik neyrosonografiya">
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
                  <h4>{t("dastur7")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar7.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar7.pdf" download="Flebologiyada ultratovush diagnostikasi zamonaviy texnologiyalari">
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
                  <h4>{t("dastur8")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar8.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar8.pdf" download="Ultratovush diagnostikasi apparatlarini boshqarish tamoyillari va exografik tasvirni maqbullashtirish">
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
                  <h4>{t("dastur9")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar9.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar9.pdf" download="Akusherlik amaliyotida dopplerografiya texnologiyalari">
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
                  <h4>{t("dastur10")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar10.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar10.pdf" download="Fetal exokardiografiya: tugoma yurak nuqsonlar diagnostikasi">
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
                  <h4> {t("dastur11")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar11.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar11.pdf" download=" Ultratovush mammografiyasining innovatsion texnologiyalari">
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
                  <h4> {t("dastur12")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar12.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar12.pdf" download="Klinik amaliyotda ultratovush elastografiya texnologiyalari">
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
                  <h4>{t("dastur13")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar13.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar13.pdf" download=" Tug'ma nuqsonlarning prenatal ultratovush diagnostikasi">
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
                  <h4>{t("dastur14")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar14.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar14.pdf" download=" Qon-tomir tizimini kompleks ultratovush diagnostikasi">
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
                  <h4>{t("dastur15")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar15.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar15.pdf" download=" Akusherlik amaliyotida ultratovush diagnostikasiningtanlangan masalalari">
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
                  <h4>{t("dastur16")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar16.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar16.pdf" download="Siydik tosh kasalligi va uning asoratlarini ultratovush diagnostikasi va davolash usullari">
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
                  <h4>{t("dastur17")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar17.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar17.pdf" download="Urologiya amaliyotida ultratovush diagnostikasining tanlangan masalalari">
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
                  <h4>{t("dastur18")}</h4>  
                </div>
                <div className='d-flex'>
                  <a target='_blank' href="/dasturlar18.pdf">
                    <button className='view'>{t("darsopen")}</button>
                  </a>

                  <a href="/dasturlar18.pdf" download="Akusherlik amaliyotida ultratovush diagnostikasi asoslari">
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

import React from 'react'
import logo from '../Images/Footer-logo.svg'
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';

export default function Footer(changeLang) {
  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <footer className='Footer'>
      <div className="container">
        <div className="footer-body row">
          <div className='col-md-6 blok1'>
            <img src={logo} alt="" />
            <p>{t("headerAbout")}</p>
          </div>

          <div className="col-md-3">
            <ul>
              {/* <h5>{t("company")}</h5> */}
              <li><NavLink to="/">{t('home')}</NavLink></li>
              <li><NavLink to="/онас">{t("about")}</NavLink></li>
              <li><NavLink to="/продукция">{t("products")}</NavLink></li>
              <li><NavLink to="/новости">{t("news")}</NavLink></li>
              <li><NavLink to="/контакты">{t("contact")}</NavLink></li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className='footer-adrres'>
              <h5>{t("adrres")}</h5>
              <a className='location-link' target='_blank' href="https://www.google.com/maps/place/Premier+Engineering/@41.3002643,69.3450202,17z/data=!3m1!4b1!4m6!3m5!1s0x38aef5ad025f6d91:0x3b4c6e8f7f995933!8m2!3d41.3002603!4d69.3475951!16s%2Fg%2F11q88vsr9n?entry=ttu">{t("adress")}</a>
            </ul>

            <div className="footer-social">
              <a href="https://t.me/premier_engineering" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14.0002 23.3333C16.4755 23.3333 18.8495 22.35 20.5998 20.5996C22.3502 18.8493 23.3335 16.4753 23.3335 14C23.3335 11.5246 22.3502 9.15066 20.5998 7.40032C18.8495 5.64998 16.4755 4.66665 14.0002 4.66665C11.5248 4.66665 9.15084 5.64998 7.4005 7.40032C5.65016 9.15066 4.66683 11.5246 4.66683 14C4.66683 16.4753 5.65016 18.8493 7.4005 20.5996C9.15084 22.35 11.5248 23.3333 14.0002 23.3333ZM14.0002 25.6666C7.55666 25.6666 2.3335 20.4435 2.3335 14C2.3335 7.55648 7.55666 2.33331 14.0002 2.33331C20.4437 2.33331 25.6668 7.55648 25.6668 14C25.6668 20.4435 20.4437 25.6666 14.0002 25.6666ZM10.3718 15.365L7.4575 14.4561C6.8275 14.2636 6.824 13.8296 7.59866 13.5181L18.9538 9.13148C19.613 8.86315 19.9863 9.20265 19.7728 10.0531L17.8397 19.1765C17.7043 19.8263 17.3135 19.9815 16.771 19.6816L13.7948 17.479L12.4077 18.8183C12.2653 18.956 12.1498 19.0738 11.9305 19.103C11.7123 19.1333 11.5327 19.068 11.4008 18.7063L10.3858 15.3568L10.3718 15.3661V15.365Z" fill="#0032A0"/>
                </svg>  
              </a>
              <a href="https://instagram.com/premier.evolution" target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14.0002 10.5C13.0719 10.5 12.1817 10.8687 11.5253 11.5251C10.8689 12.1815 10.5002 13.0717 10.5002 14C10.5002 14.9282 10.8689 15.8185 11.5253 16.4749C12.1817 17.1312 13.0719 17.5 14.0002 17.5C14.9284 17.5 15.8187 17.1312 16.475 16.4749C17.1314 15.8185 17.5002 14.9282 17.5002 14C17.5002 13.0717 17.1314 12.1815 16.475 11.5251C15.8187 10.8687 14.9284 10.5 14.0002 10.5ZM14.0002 8.16665C15.5473 8.16665 17.031 8.78123 18.125 9.87519C19.2189 10.9692 19.8335 12.4529 19.8335 14C19.8335 15.5471 19.2189 17.0308 18.125 18.1248C17.031 19.2187 15.5473 19.8333 14.0002 19.8333C12.4531 19.8333 10.9693 19.2187 9.87537 18.1248C8.78141 17.0308 8.16683 15.5471 8.16683 14C8.16683 12.4529 8.78141 10.9692 9.87537 9.87519C10.9693 8.78123 12.4531 8.16665 14.0002 8.16665ZM21.5835 7.87498C21.5835 8.26175 21.4299 8.63269 21.1564 8.90618C20.8829 9.17967 20.5119 9.33331 20.1252 9.33331C19.7384 9.33331 19.3675 9.17967 19.094 8.90618C18.8205 8.63269 18.6668 8.26175 18.6668 7.87498C18.6668 7.48821 18.8205 7.11727 19.094 6.84378C19.3675 6.57029 19.7384 6.41665 20.1252 6.41665C20.5119 6.41665 20.8829 6.57029 21.1564 6.84378C21.4299 7.11727 21.5835 7.48821 21.5835 7.87498ZM14.0002 4.66665C11.1138 4.66665 10.6425 4.67481 9.29966 4.73431C8.385 4.77748 7.77133 4.89998 7.202 5.12165C6.69566 5.31765 6.3305 5.55215 5.942 5.94181C5.57684 6.29461 5.29607 6.72533 5.12066 7.20181C4.899 7.77348 4.7765 8.38598 4.7345 9.29948C4.67383 10.5875 4.66683 11.0378 4.66683 14C4.66683 16.8863 4.675 17.3576 4.7345 18.7005C4.77766 19.614 4.90016 20.2288 5.12066 20.797C5.319 21.3045 5.55233 21.6696 5.93966 22.057C6.33283 22.449 6.698 22.6835 7.19966 22.8771C7.776 23.1 8.38966 23.2236 9.29966 23.2656C10.5877 23.3263 11.038 23.3333 14.0002 23.3333C16.8865 23.3333 17.3578 23.3251 18.7007 23.2656C19.613 23.2225 20.2278 23.1 20.7972 22.8795C21.3023 22.6823 21.6698 22.4478 22.0572 22.0605C22.4503 21.6673 22.6848 21.3021 22.8785 20.8005C23.1002 20.2253 23.2238 19.6105 23.2658 18.7005C23.3265 17.4125 23.3335 16.9621 23.3335 14C23.3335 11.1136 23.3253 10.6423 23.2658 9.29948C23.2227 8.38715 23.1002 7.77115 22.8785 7.20181C22.7027 6.72581 22.4224 6.29527 22.0583 5.94181C21.7057 5.57647 21.2749 5.29567 20.7983 5.12048C20.2267 4.89881 19.613 4.77631 18.7007 4.73431C17.4127 4.67365 16.9623 4.66665 14.0002 4.66665ZM14.0002 2.33331C17.17 2.33331 17.5655 2.34498 18.8092 2.40331C20.0517 2.46165 20.8975 2.65648 21.6418 2.94581C22.4118 3.24215 23.0605 3.64348 23.7092 4.29098C24.3024 4.87419 24.7614 5.57967 25.0543 6.35831C25.3425 7.10148 25.5385 7.94848 25.5968 9.19098C25.6517 10.4346 25.6668 10.8301 25.6668 14C25.6668 17.1698 25.6552 17.5653 25.5968 18.809C25.5385 20.0515 25.3425 20.8973 25.0543 21.6416C24.7623 22.4207 24.3031 23.1264 23.7092 23.709C23.1258 24.302 22.4204 24.761 21.6418 25.0541C20.8987 25.3423 20.0517 25.5383 18.8092 25.5966C17.5655 25.6515 17.17 25.6666 14.0002 25.6666C10.8303 25.6666 10.4348 25.655 9.19116 25.5966C7.94866 25.5383 7.10283 25.3423 6.3585 25.0541C5.57954 24.7619 4.87394 24.3027 4.29116 23.709C3.6978 23.1259 3.23875 22.4204 2.946 21.6416C2.65666 20.8985 2.46183 20.0515 2.4035 18.809C2.34866 17.5653 2.3335 17.1698 2.3335 14C2.3335 10.8301 2.34516 10.4346 2.4035 9.19098C2.46183 7.94731 2.65666 7.10265 2.946 6.35831C3.23794 5.57919 3.6971 4.87352 4.29116 4.29098C4.87411 3.69742 5.57966 3.23833 6.3585 2.94581C7.10283 2.65648 7.9475 2.46165 9.19116 2.40331C10.4348 2.34848 10.8303 2.33331 14.0002 2.33331Z" fill="#0032A0"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

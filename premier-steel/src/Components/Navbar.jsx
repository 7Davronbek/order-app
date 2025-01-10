import React, { useEffect } from 'react'
import logo from '../Images/Logo.svg'
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import languageIcon from '../Images/Icons/language-icon.svg'
import { useLanguage } from '../context/languageContext';
import { LANGUAGE } from '../shared/axios';


const Navbar = ({ changeLang }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { changeLanguage, language } = useLanguage();

  const { t } = useTranslation();
  const changeLocale = (e) => {
    changeLang(e.target.value)
    changeLanguage(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  // useEffect(() => {
  // }, [language])

  return (
    <header>
      <nav className='Navbar'>
        <div className="nav-head">
          <div className="container">

            <div className="head-body">

              <div className='nav-socials'>
                {/* <button  onClick={() => setModalShow(true)}>Связываться</button> */}

                <ul>
                  <li>
                    <a href="https://instagram.com/premier.evolution" target='_blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38px" height="38px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5" /><stop offset=".328" stop-color="#ff543f" /><stop offset=".348" stop-color="#fc5245" /><stop offset=".504" stop-color="#e64771" /><stop offset=".643" stop-color="#d53e91" /><stop offset=".761" stop-color="#cc39a4" /><stop offset=".841" stop-color="#c837ab" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9" /><stop offset=".999" stop-color="#4168c9" stop-opacity="0" /></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z" /><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z" /><circle cx="31.5" cy="16.5" r="1.5" fill="#fff" /><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z" /></svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/premier_engineering" target='_blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="38px" height="38px"><path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" /><path fill="#fff" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z" /><path fill="#b0bec5" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z" /><path fill="#cfd8dc" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z" /></svg>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <img className='languageIcon' src={languageIcon} alt="" />
                <select className="language" name="languages" id="languages" onChange={changeLocale}>
                  <option selected={LANGUAGE === 'uz'} value="uz">O'zbekcha</option>
                  <option selected={LANGUAGE === 'ru'} value="ru">Русский</option>
                  <option selected={LANGUAGE === 'en'} value="en">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container">

          <div className="nav-body">
            <NavLink to="/">
              <img className='nav-logo' src={logo} alt="logo" />
            </NavLink>

            <ul>
              <li><NavLink to="/">{t('home')}</NavLink></li>
              <li><NavLink to="/онас">{t("about")}</NavLink></li>
              <li><NavLink to="/продукция">{t("products")}</NavLink></li>
              <li><NavLink to="/новости">{t("news")}</NavLink></li>
              <li><NavLink to="/контакты">{t("contact")}</NavLink></li>
            </ul>

          </div>
        </div>

      </nav>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </header>
  )
}

export default Navbar;

import React, { useEffect } from 'react'
import img from '../images/logo.jpg'
import phone from '../images/icons/icons8-phone-96.png'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import tg from '../images/icons/telegram.svg'
import insta from '../images/icons/instagram.svg'
import fc from '../images/icons/facebook.svg'


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import httpClient, { LANGUAGE } from '../shared/axios';
import { useLanguage } from '../context/languageContext';

const Navbar1 = ({ changeLang }) => {

  const { changeLanguage, language } = useLanguage();

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const [newsCategories, setNewsCategories] = useState([])
  const [regulationDocs, setRegulationDocs] = useState([])

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const { t } = useTranslation();
  const changeLocale = (e) => {
    changeLang(e.target.value)
    changeLanguage(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }


  const getNewsCategories = async () => {
    const { data } = await httpClient.get('/categories')
    setNewsCategories(data)
  }


  const getRegulationDocuments = async () => {
    const { data } = await httpClient.get('/regulatory-documents')
    setRegulationDocs(data)
  }

  useEffect(() => {
    getNewsCategories()
    getRegulationDocuments()
  }, [language])

  return (
    <nav className='Navbar'>
      <div className="nav-head">
        <div className="container">
          <div className="d-flex">
            <ul className='socials'>
              <li><img src={tg} alt="socials" /></li>
              <li><img src={insta} alt="socials" /></li>
              <li><img src={fc} alt="socials" /></li>
            </ul>

            <select className="language" name="languages" id="languages" onChange={changeLocale}>
              <option selected={LANGUAGE === 'uz'} value="uz">O'zbekcha</option>
              <option selected={LANGUAGE === 'oz'} value="oz">Ўзбекча</option>
              <option selected={LANGUAGE === 'ru'} value="ru">Русский</option>
              <option selected={LANGUAGE === 'en'} value="en">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="nav-body">
          <NavLink to='/'>
            <div className="d-flex">
              <img className='nav-logo' src={img} alt="logo" />
              <h3 className='logo-texts'>
                {t("logo1")} <br />
                {t("logo2")} <br />
                {t("logo3")}
              </h3>
            </div>
          </NavLink>

          <div>
            <ul className='nav-socials'>
              <li className='pochta'>
                <h6>{t('navTel')}</h6>
                <a href="tel:+998712966975"><img className='phone-icon' src={phone} alt="phone icon" /><span>(+998)</span><h4>71-296-69-75</h4></a>
              </li>
              <li className='pochta'>
                <h6>{t('email')}</h6>
                <a href="#"><span>info@tipme.uz</span></a>
              </li>


            </ul>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="nav2 bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="mb-3"></div>
              <NavLink className="nav-link" to="/">{t('home')}</NavLink>
              <NavDropdown title={t("kafedra")} id="basic-nav-dropdown">
                <div className="dropdown">
                  <li>
                    <NavLink className="drop-link" to="/kafedra/tarix"><NavDropdown.Item href="#action/3.2">
                      {t("kafedra1")}
                    </NavDropdown.Item></NavLink>
                  </li>
                  <li>

                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">{t('kafedra2')}
                    </NavDropdown.Item></NavLink>
                  </li>
                  <li>

                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">{t('kafedra3')}
                    </NavDropdown.Item></NavLink>
                  </li>
                  <li>

                    <NavLink className="drop-link" to="/kafedra/malumotnomalar"><NavDropdown.Item href="#action/3.2">{t('kafedra4')}
                    </NavDropdown.Item></NavLink>
                  </li>
                  <li>

                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">{t('kafedra5')}
                    </NavDropdown.Item></NavLink>
                  </li>
                </div>


              </NavDropdown>

              <NavDropdown title={t("xujjatlar")} id="basic-nav-dropdown">
                <div className="dropdown">
                  <li>
                    <NavLink className="drop-link" to="/meyoriyxujjatlar/prezidentfarmonlari"><NavDropdown.Item href="#action/3.2">
                      {t("xujjatlar1")}
                    </NavDropdown.Item></NavLink>
                  </li>
                  <li>

                    <NavLink className="drop-link" to="/meyoriyxujjatlar/ssvbuyruqlari"><NavDropdown.Item href="#action/3.2">{t("xujjatlar2")}
                    </NavDropdown.Item></NavLink>
                  </li>
                  <li>

                    <NavLink className="drop-link" to="/meyoriyxujjatlar/markazbuyruqlari"><NavDropdown.Item href="#action/3.2">{t("xujjatlar3")}
                    </NavDropdown.Item></NavLink>
                  </li>
                  <li>

                    <NavLink className="drop-link" to="/meyoriyxujjatlar/dasturlar"><NavDropdown.Item href="#action/3.2">{t("xujjatlar4")}
                    </NavDropdown.Item></NavLink>
                  </li>
                  <li>

                    <NavLink className="drop-link" to="/meyoriyxujjatlar/ishchidasturlar"><NavDropdown.Item href="#action/3.2">{t("xujjatlar5")}
                    </NavDropdown.Item></NavLink>
                  </li>

                  <li>

                    <NavLink className="drop-link" to="/meyoriyxujjatlar/taqvimreja"><NavDropdown.Item href="#action/3.2">{t("xujjatlar6")}
                    </NavDropdown.Item></NavLink>
                  </li>

                  <li>

                    <NavLink className="drop-link" to="/meyoriyxujjatlar/darsjadvali"><NavDropdown.Item href="#action/3.2">{t("xujjatlar7")}
                    </NavDropdown.Item></NavLink>
                  </li>
                </div>


              </NavDropdown>

              <NavDropdown title={t("faoliyat")} id="basic-nav-dropdown">
                <div className="dropdown">
                  <li>
                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">
                      {t("faoliyat1")}
                    </NavDropdown.Item></NavLink>
                  </li>

                  <li>
                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">
                      {t("faoliyat2")}
                    </NavDropdown.Item></NavLink>
                  </li>

                  <li>
                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">
                      {t("faoliyat3")}
                    </NavDropdown.Item></NavLink>
                  </li>

                  <li>
                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">
                      {t("faoliyat4")}
                    </NavDropdown.Item></NavLink>
                  </li>
                </div>
              </NavDropdown>

              <NavDropdown title={t("tinglovchilar")} id="basic-nav-dropdown">
                <div className="dropdown">
                  <li>
                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">
                      {t("tinglovchilar1")}
                    </NavDropdown.Item></NavLink>
                  </li>

                  <li>
                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">
                      {t("tinglovchilar2")}
                    </NavDropdown.Item></NavLink>
                  </li>
                </div>
              </NavDropdown>

              <NavDropdown title={t("news")} id="basic-nav-dropdown">
                <div className="dropdown">
                  <li>
                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">
                      {t("news1")}
                    </NavDropdown.Item></NavLink>
                  </li>

                  <li>
                    <NavLink className="drop-link" to="/test"><NavDropdown.Item href="#action/3.2">
                      {t("news2")}
                    </NavDropdown.Item></NavLink>
                  </li>
                </div>
              </NavDropdown>

              <NavLink className="nav-link" to="/aloqa">{t("contact")}</NavLink>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-bar">
        <div className="container">
          <ul>
            <li><NavLink to="/">{t('home')}</NavLink></li>
            <li className='left-link'>
              <a >{t("kafedra")}</a>
              <div className="dropdown">
                <NavLink className="drop-link" to="/kafedra/tarix">{t('kafedra1')}</NavLink>
                <NavLink className="drop-link" to="/test">{t('kafedra2')}</NavLink>
                <NavLink className="drop-link" to="/test">{t('kafedra3')}</NavLink>
                <NavLink className="drop-link" to="/kafedra/malumotnomalar">{t('kafedra4')}</NavLink>
                <NavLink className="drop-link" to="/test">{t('kafedra5')}</NavLink>

              </div>
            </li>
            <li className='left-link'>
              <a>{t("xujjatlar")}</a>
              <div className="dropdown">

                {!!regulationDocs && regulationDocs.map((item) => (
                  <NavLink key={item.id} className="drop-link" to={`/regulation-documents/${item.id}`}>{item.name}</NavLink>
                ))}
              </div>
            </li>
            <li className='left-link'>
              <NavLink to='/activity'>{t("faoliyat")}</NavLink>
              {/* <div className="dropdown">
                <NavLink className="drop-link" to="/test">{t("faoliyat1")}</NavLink>
                <NavLink className="drop-link" to="/test">{t("faoliyat2")}</NavLink>
                <NavLink className="drop-link" to="/test">{t("faoliyat3")}</NavLink>
                <NavLink className="drop-link" to="/test">{t("faoliyat4")}</NavLink>

              </div> */}
            </li>
            <li className='left-link'>
              <a >{t('tinglovchilar')}</a>
              <div className="dropdown">
                <NavLink className="drop-link" to="/test">{t('tinglovchilar1')}</NavLink>
                <NavLink className="drop-link" to="/test">{t('tinglovchilar2')}</NavLink>

              </div>
            </li>
            <li className='left-link'>
              <a>{t("news")}</a>
              <div className="dropdown">
                {!!newsCategories && newsCategories.map((item) => (
                  <NavLink key={item.id} className="drop-link" to={`/news/${item.id}`}>{item.name}</NavLink>
                ))}
              </div>
            </li>
            <li><NavLink to="/aloqa">{t("contact")}</NavLink></li>

            {/* {values.map((v, idx) => (
              <svg className='burger-btn' onClick={() => handleShow(v)} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                <rect x="100" y="100" width="100" height="100" rx="20" transform="rotate(-180 100 100)" fill="#D9D9D9" fill-opacity="0.7"/>
                <path d="M73 66L27 66" stroke="black" stroke-width="5" stroke-linecap="round"/>
                <path d="M73 50L27 50" stroke="black" stroke-width="5" stroke-linecap="round"/>
                <path d="M73 34L27 34" stroke="black" stroke-width="5" stroke-linecap="round"/>
              </svg>
            ))} */}

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <img src={img} alt="logo" />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>

                <li><NavLink values onClick={() => handleShow()} to="/">{t('home')}</NavLink></li>

              </Modal.Body>
            </Modal>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar1;
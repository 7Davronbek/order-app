import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LANGUAGE } from '../tools/constant'
import { getLanguage, getText } from '../locales'

const Navbar = () => {
    const [burger, setBurger] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    const accessToken = localStorage.getItem('accessToken');

    const changeLanguage = (e) => {
        localStorage.setItem(LANGUAGE, e.target.value);
        document.location.reload(true)
    }

    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    // const changeLanguage = (e) => {
    //     localStorage.setItem(LANGUAGE, e.target.value);
    //     document.location.reload(true)
    // }

    window.addEventListener('scroll', changeNavbar)

    const logOut = () => {
        localStorage.removeItem('accessToken');
        window.location.reload();
    }

    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row">
                        <Link to="/" className="col-6 d-lg-none  d-flex align-items-center">
                            <img src="/img/logo.png" alt="" className="nav_logo" />
                        </Link>
                        <div className={`col-12 d-flex align-items-center nav_a_box ${burger ? 'active' : ''}`}>
                            <Link to="/">
                                <img src="/img/logo.png" alt="" className="nav_logo" />
                            </Link>
                            <Link onClick={() => setBurger(!burger)} to="/" className={`nav_a ${location.pathname === "/" ? 'active' : ''}`}>{getText("nav_1")}</Link>
                            <Link onClick={() => setBurger(!burger)} to="/offers" className={`nav_a ${location.pathname === "/offers" ? 'active' : ''}`}>{getText("nav_2")}</Link>
                            <Link onClick={() => setBurger(!burger)} to="/visa" className={`nav_a ${location.pathname === "/visa" ? 'active' : ''}`}>{getText("nav_7")}</Link>
                            <Link onClick={() => setBurger(!burger)} to="/about" className={`nav_a ${location.pathname === "/about" ? 'active' : ''}`}>{getText("nav_3")}</Link>
                            <Link onClick={() => setBurger(!burger)} to="/contact" className={`nav_a ${location.pathname === "/contact" ? 'active' : ''}`}>{getText("nav_4")}</Link>
                            <Link onClick={() => setBurger(!burger)} to="/registration" className="nav_btn_1 d-lg-none d-flex">{getText("nav_5")}</Link>
                            <Link onClick={() => setBurger(!burger)} to="/login" className="nav_btn_2 d-lg-none d-flex">{getText("nav_6")}</Link>
                            <div className="lang_box d-lg-none d-flex">
                                <select onChange={changeLanguage} className='lang_text' name="" id="">
                                    <option selected={getLanguage() === "uz"} value="uz">Uz</option>
                                    <option selected={getLanguage() === "ru"} value="ru">Ру</option>
                                    <option selected={getLanguage() === "en"} value="en">En</option>
                                </select>
                            </div>
                            
                            <div className="lang_box">
                                <select onChange={changeLanguage} className='lang_text' name="" id="">
                                    <option selected={getLanguage() === "uz"} value="uz">Uz</option>
                                    <option selected={getLanguage() === "ru"} value="ru">Ру</option>
                                    <option selected={getLanguage() === "en"} value="en">En</option>
                                </select>
                            </div>
                        </div>
                        {/* <div className="col-2 d-lg-flex align-items-center justify-content-end d-none">
                            <div className="lang_box">
                                <select onChange={changeLanguage} className='lang_text' name="" id="">
                                    <option selected={getLanguage() === "uz"} value="uz">Uz</option>
                                    <option selected={getLanguage() === "ru"} value="ru">Ру</option>
                                    <option selected={getLanguage() === "en"} value="en">En</option>
                                </select>
                            </div>

                            {accessToken ?
                                <>
                                    <div className="nav_btn_2" onClick={logOut}>{getText("log_out")}</div>
                                </> : <> <Link to="/registration" className="nav_btn_1">{getText("nav_5")}</Link>
                                    <Link to="/login" className="nav_btn_2">{getText("nav_6")}</Link>
                                </>}
                        </div> */}
                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger_up "></div>
                            <div className="burger_down"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom"></div>
        </>
    )
}

export default Navbar
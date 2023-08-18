import { useState } from "react";
const Navbar = () => {
  const [burger, setBurger] = useState(false);
  return (
    <>
      <div className={`burgerWrap ${burger && "active"}`}>
        <div className="close"></div>
        <div className="burgerWrapper">
          <a onClick={() => setBurger(false)} className="a" href="#">
            Главная
          </a>
          <a onClick={() => setBurger(false)} className="a" href="#WhatWeCanDo">
            О нас
          </a>
          <a onClick={() => setBurger(false)} className="a" href="#DigitalMarketing">
            Услуги
          </a>
          <a onClick={() => setBurger(false)} className="a" href="#OurWorks">
            Портфолио
          </a>
          <a onClick={() => setBurger(false)} className="a" href="#Feedback">
            Контакты
          </a>
          <a
            onClick={() => setBurger(false)}
            href="#Feedback"
            className="btn myBtn mobile"
          >
            Оставить заявку
          </a>
        </div>
      </div>

      <div className={`Navbar`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-4">
              <a href="/" className="logo">
                <img loading="lazy"className="" src="/images/logo.svg" alt="Balance group" />
              </a>
            </div>

            <div className={`col-lg-7 wrap ${burger && "active"}`}>
              <a onClick={() => setBurger(false)} className="a" href="#">
                Главная
              </a>
              <a className="a" href="#WhatWeCanDo">
                О нас
              </a>
              <a onClick={() => setBurger(false)} className="a" href="#DigitalMarketing">
                Услуги
              </a>
              <a onClick={() => setBurger(false)} className="a" href="#OurWorks">
                Портфолио
              </a>
              <a onClick={() => setBurger(false)} className="a" href="#Feedback">
                Контакты
              </a>
              <a
                onClick={() => setBurger(false)}
                href="#Feedback"
                className="btn myBtn mobile"
              >
                Оставить заявку
              </a>
            </div>

            <div className="col-lg-3">
              <a href="#Feedback" className="btn myBtn desktop">
                Оставить заявку
              </a>
            </div>

            <div
              onClick={() => setBurger(!burger)}
              className={`burger pr-4 ml-auto d-flex d-lg-none ${
                burger && "active"
              }`}
            >
              <div className="burger_up "></div>
              <div className="burger_down"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import logo from "../../../assets/logoHome.svg";
import image from "../../../assets/dildora.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <h1>baxt maktabi</h1>
            <div className="cards">
              <div className="leftImage">
                <img src={image} alt="" />
              </div>
              <div className="right">
                <h2>Dilobar Ismailova</h2>
                <h3>
                  Pragadagi Nyu-York universitetining psixologiya fakulteti
                  magistri. <br /> <br />
                  2017 yildan 2019 yilgacha O‘zbekiston davlat organlarida
                  ishlagan: Tadbirkorlik asoslarini o‘rgatish Respublika o‘quv
                  markazi direktori o‘rinbosari (qizlar va ayollarni yakka
                  tartibdagi tadbirkorlikka jalb qilgan), shuningdek ishsiz
                  ayollarni kasbga o‘qitish va ularni yanada rivojlantirish
                  bo‘yicha “Ishga Marhamat” monomarkazi direktori O‘zbekiston
                  Mehnat vazirligi huzuridagi bandlik.
                </h3>
              </div>
            </div>
            <div className="link">
              <Link to={"/register"}>Shaxsiy kabinetga kirish</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

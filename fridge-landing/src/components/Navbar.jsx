import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useState } from "react";
import { LANGUAGE } from "../constants";
import { getLanguage, getText } from '../locales'

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUAGE, e.target.value);
    document.location.reload(true);
  };
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-4">
              <a href="#">
                <img
                  loading="lazy"
                  className="w-100 img"
                  src="/images/logo.png"
                  alt=""
                />
              </a>
            </div>
            <div
              onClick={() => setBurger(!burger)}
              className={`burger pr-4 ml-auto d-flex d-lg-none ${
                burger ? "burgered" : ""
              }`}
            >
              <div className="burger1"></div>
              <div className="burger2"></div>
              <div className="burger3"></div>
            </div>
            <div className={`col-lg-9 myCol ${burger ? "active" : ""}`}>
              <a onClick={() => setBurger(false)} href="#">
                {getText("navbar1")}
              </a>
              <a onClick={() => setBurger(false)} href="#service">
              {getText("navbar2")}
              </a>
              <a onClick={() => setBurger(false)} href="#about">
              {getText("navbar3")}
              </a>
              <a onClick={() => setBurger(false)} href="#team">
              {getText("navbar4")}
              </a>
              <a onClick={() => setBurger(false)} href="#contact">
              {getText("navbar5")}
              </a>
              <a
                onClick={() => setBurger(false)}
                className="phone"
                href="tel:+998 98 128 99 95"
              >
                +998 98 128 99 95
              </a>
              <FormControl>
                {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <LanguageIcon />
                </InputLabel> */}
                <NativeSelect
                  onChange={changeLanguage}
                >
                  <option selected={getLanguage() === "ru"} value={"ru"}>
                    Ру
                  </option>
                  <option selected={getLanguage() === "uz"} value={"uz"}>
                    Uz
                  </option>
                </NativeSelect>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="navbarLine"></div>
    </>
  );
};

export default Navbar;

import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { useState } from "react";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
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
              <a onClick={() => setBurger(false)} href="#">Главная</a>
              <a onClick={() => setBurger(false)} href="#service">Услуги</a>
              <a onClick={() => setBurger(false)} href="#about">О нас</a>
              <a onClick={() => setBurger(false)}href="#team">Команда</a>
              <a onClick={() => setBurger(false)} href="#contact">Контакты</a>
              <a onClick={() => setBurger(false)} href="#feedback">Отзывы</a>
              <a onClick={() => setBurger(false)} className="phone" href="tel:+998 98 128 99 95">
                +998 98 128 99 95
              </a>
              <FormControl>
                {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  <LanguageIcon />
                </InputLabel> */}
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={10}>Uz</option>
                  <option value={20}>Ру</option>
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

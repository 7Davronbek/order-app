import {} from "react";

const Navbar = () => {
  return (
    <>
      <div className="Navbar1">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex align-items-center">
              <div className="nav_soc">
                <a href="" className="nav_a">
                  <img src="/img/icon_facebook.png" alt="" />
                </a>
                <a href="" className="nav_a">
                  <img src="/img/icon_insta.png" alt="" />
                </a>
                <a href="" className="nav_a">
                  <img src="/img/icon_youtoobe.png" alt="" />
                </a>
                <a href="" className="nav_a">
                  <img src="/img/icon_tel.png" alt="" />
                </a>
              </div>
              <div className="nav_1_line"></div>
              <a href="" className="nav_tel">
                <img src="/img/icon_call.png" alt="" />
                +998 88 202 00 05
              </a>
            </div>

            <div className="col-6 d-flex align-items-center justify-content-end">
              <select className="nav_lang" name="" id="">
                <option value="">Ру</option>
              </select>
              <div className="nav_1_line"></div>
              <a href="" className="nav_tel">
                <img src="/img/icon_location.png" alt="" />
                Toshkent viloyati, Fayzli makon mahallasi
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Navbar2">
        <div className="container">
          <div className="row">
            <div className="col-2 d-flex align-items-center">
              <a className="nav_logo" href="">
                <img src="/img/logo.png" alt="" />
              </a>
            </div>
            <div className="col-8 d-flex align-items-center justify-content-center gap-5 ">
              <a href="" className="nav_link">
                О нас
              </a>
              <a href="" className="nav_link">
                О проекте
              </a>
              <a href="" className="nav_link">
                Новости
              </a>
              <a href="" className="nav_link">
                Контакты
              </a>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end">
              <a href="" className="nav_phone">
                <img src="/img/icon_call.png" alt="" />
                Позвонить
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

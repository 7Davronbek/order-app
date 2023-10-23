import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="nav_1">
            <div className="row justify-content-between w-100">
              <Link to="/" className="col-3 d-flex align-items-center">
                <img src="/img/logo.png" alt="" className="nav_logo" />
              </Link>
              <div className="col-5 d-flex align-items-center gap-3">
                <div className="nav_inp_box">
                  <img
                    className="nav_inp_icon_1"
                    src="/img/nav_inp_1.png"
                    alt=""
                  />
                  <img
                    className="nav_inp_icon_2"
                    src="/img/nav_inp_2.png"
                    alt=""
                  />
                  <div className="filterWrap">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="inputWrap">
                        <label htmlFor="lot">
                          Lot raqami yoki mol-mulk nomi
                        </label>
                        <input
                          id="lot"
                          type="text"
                          placeholder="Kiriting"
                          className="form-control"
                        />
                      </div>
                      <div className="inputWrap">
                        <label htmlFor="date">Savdo kuni</label>
                        <input
                          id="date"
                          type="date"
                          placeholder="Kiriting"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-3">
                      <div className="inputWrap">
                        <label htmlFor="lot">
                          Lot raqami yoki mol-mulk nomi
                        </label>
                        <input
                          id="lot"
                          type="text"
                          placeholder="Kiriting"
                          className="form-control"
                        />
                      </div>
                      <div className="inputWrap">
                        <label htmlFor="date">Savdo kuni</label>
                        <input
                          id="date"
                          type="date"
                          placeholder="Kiriting"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <input placeholder="Izlash" type="text" name="" id="" />
                </div>
                <button className="nav_inp_btn">Izlash</button>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className="nav_btn_1">
                  Tizimga kirish
                </Link>
                {/* <Link to="/login" className="nav_btn_2">
                  Kirish
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <div className="nav_2">
          <div className="container">
            <div className="row justify-content-between w-100">
              <div className="col-7 d-flex align-items-center">
                <Link
                  to="/"
                  className={`nav_a ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Lotlar
                </Link>
                <Link
                  to="/about"
                  className={`nav_a ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                >
                  Auksion haqida
                </Link>
                {/* <Link
                  to="/Interactive"
                  className={`nav_a ${
                    location.pathname === "/Interactive" ? "active" : ""
                  }`}
                >
                  Interaktiv xizmatlar
                </Link> */}
                <Link
                  to="/news"
                  className={`nav_a ${
                    location.pathname === "/news" ? "active" : ""
                  }`}
                >
                  Yangiliklar
                </Link>
                <Link
                  to="/contact"
                  className={`nav_a ${
                    location.pathname === "/contact" ? "active" : ""
                  }`}
                >
                  Bog’lanish
                </Link>
              </div>
              <div className="col-5 d-flex align-items-center justify-content-end">
                <div className="nav_2_social d-flex gap-3">
                  <a href="" className="nav_soc_a">
                    <img src="/img/icon_instagram.png" alt="" />
                  </a>
                  <a href="" className="nav_soc_a">
                    <img src="/img/icon_telegram.png" alt="" />
                  </a>
                  <a href="" className="nav_soc_a">
                    <img src="/img/icon_facebook.png" alt="" />
                  </a>
                </div>
                <a href="" className="nav_save">
                  <img src="/img/icon_saved.png" alt="" />
                </a>
                <div className="nav_lang">
                  <img src="/img/icon_flag_1.png" alt="" />
                  <select name="" id="">
                    <option value="">Uz</option>
                    <option value="">Ru</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

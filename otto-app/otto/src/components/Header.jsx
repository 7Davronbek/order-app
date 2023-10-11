/* eslint-disable react/no-unescaped-entities */
const Header = () => {
  return (
    <div className="Header">
      <img className="headerBg" src="/images/headerBg.png" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto logo">
            <img src="/images/logo.svg" alt="" className="logo" />
            <div className="logoWrap">
              <img src="/images/language.svg" alt="" />
              <select name="" id="">
                <option value="ру">ру</option>
              </select>
            </div>
          </div>

          <div className="col-lg-9 mx-auto">
            <div className="infoWrap">
              <i>
                <img src="/images/location.svg" alt="" />
              </i>
              <a href="#">
                Toshkent, Тошкент, Shahrisabz ko'chasi Работаем с 08:30 до 00:00
              </a>
            </div>
            <div className="infoWrap">
              <i>
                <img src="/images/phone.svg" alt="" />
              </i>
              <a href="tel:+998 99 353 35 75">+998 99 353 35 75</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

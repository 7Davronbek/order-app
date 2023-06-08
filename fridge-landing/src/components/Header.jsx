const Header = () => {
  return (
    <div className="Header">
    <div className="col-12 mobileImg">
      <img className="w-100" src="/images/header2.webp" alt="" />
    </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="cards">
              <h1>Ремонт холодильников в Ташкенте</h1>
              <a href="tel:+998 98 128 99 95" className="myBtn">
                Заказать звонок
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="blue"></div>
    </div>
  );
};

export default Header;
const Navbar = () => {
  return (
    <div className={`Navbar`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-4">
            <div className="logo">
              <img className="" src="/images/logo.svg" alt="Balance group" />
            </div>
          </div>

          <div className="col-lg-7 wrap">
            <a href="#">Главная</a>
            <a href="#">О нас</a>
            <a href="#">Услуги</a>
            <a href="#">Портфолио</a>
            <a href="#">Контакты</a>
          </div>

          <div className="col-lg-3">
            <button className="btn myBtn">Оставить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

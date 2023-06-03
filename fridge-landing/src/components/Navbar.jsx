const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-4">
              <a href="#">
                <img className="w-100" src="/images/logo.svg" alt="" />
              </a>
            </div>
            <div className="col-lg-9 myCol">
              <a href="#">Главная</a>
              <a href="#">Услуги</a>
              <a href="#">О нас</a>
              <a href="#">Команда</a>
              <a href="#">Контакты</a>
              <a href="#">Отзывы</a>
              <a className="phone" href="tel:+998 90 123 45 67">
                +998 90 123 45 67
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="navbarLine"></div>
    </>
  );
};

export default Navbar;

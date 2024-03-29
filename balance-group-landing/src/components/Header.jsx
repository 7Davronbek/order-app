const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1>Помогаем хорошим победить</h1>
            <p>
              Мы предлагаем весь спектр услуг по продвижению и брендингу Вашего
              бизнеса в сфере DIGITAL
            </p>

            <div className="image">
              <img loading="lazy" src="/images/companyGroup.svg" alt="" />
            </div>

            <a href="tel:+998 90 061 00 44" className="btn">
              <div className="circle">
                <img loading="lazy" src="/images/arrowUp.svg" alt="" />
              </div>
              <h3>Узнать стоимость</h3>
            </a>
          </div>

          <div className="col-lg-4">
            <div className="rightWrap">
              <video autoPlay muted loop className="">
                <source src="/videos/iPhone.webm" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="light1">
        <img loading="lazy" src="/images/light1.png" alt="" />
      </div>
      <div className="light2">
        <img loading="lazy" src="/images/light2.png" alt="" />
      </div>
      <div className="grid1">
        <img loading="lazy" src="/images/headerGrid.png" alt="" />
      </div>
    </div>
  );
};

export default Header;

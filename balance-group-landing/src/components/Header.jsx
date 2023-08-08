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
              <img src="/images/companyGroup.svg" alt="" />
            </div>

            <div className="btn">
              <div className="circle">
                <img src="/images/arrowUp.svg" alt="" />
              </div>
              <h3>Узнать стоимость</h3>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="rightWrap">
              <img src="/images/headerPhones.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="light1"><img src="/images/light1.png" alt="" /></div>
      <div className="light2"><img src="/images/light2.png" alt="" /></div>
      <div className="grid1"><img src="/images/headerGrid.png" alt="" /></div>
    </div>
  );
};

export default Header;

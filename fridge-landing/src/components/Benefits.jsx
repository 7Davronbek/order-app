const Benefits = () => {
  return (
    <>
      <div id="benefit" className="Benefits">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Мы отличаемся тремя преимуществами</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-4">
                  <div className="cards">
                    <div className="img">
                      <img loading="lazy" src="/images/b1.png" alt="" />
                    </div>
                    <h2>Гарантия низкой цены</h2>
                    <h3>
                      Наш прайс составлен на основе средних рыночных цен, потому
                      что мы закупаем запчасти напрямую у производителей.
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cards">
                    <div className="img">
                      <img loading="lazy" src="/images/b2.png" alt="" />
                    </div>
                    <h2>Ремонт за 1 день или за наш счёт</h2>
                    <h3>
                      Даже если после диагностики вы решите отложить ремонт или
                      вовсе от него отказаться, в любом случае, услуга будет
                      оказана бесплатно!
                    </h3>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="cards">
                    <div className="img">
                      <img loading="lazy" src="/images/b3.png" alt="" />
                    </div>
                    <h2>Ремонт за 1 день или за наш счёт</h2>
                    <h3>
                      Даже если после диагностики вы решите отложить ремонт или
                      вовсе от него отказаться, в любом случае, услуга будет
                      оказана бесплатно!
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="benefitsLine"></div>
    </>
  );
};

export default Benefits;

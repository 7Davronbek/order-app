import Button from "@mui/material/Button";

const OurServices = () => {
  return (
    <div id="service" className="OurServices">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Наши услуги</h1>
            <h2>Работаем со всеми видами техники</h2>
          </div>
        </div>
        <div className="row  justify-content-center">
          <div className="col-lg-5">
            <div className="cards">
              <img
                loading="lazy"
                src="/images/service1.png"
                className="w-100"
                alt=""
              />
              <h3>Ремонт бытовой техники</h3>
              <p>Стиральные машины</p>
              <p>Холодильники</p>
              <p>Морозильники</p>
              <p>Витрины</p>
              <p>Духовки</p>
              <p>Пылесосы</p>
              <p>Микроволновки</p>
              <p>Телевизоры</p>
              <Button className="myBtn" variant="contained">
                Заказать услугу
              </Button>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="cards second">
              <div>
                <img
                  loading="lazy"
                  src="/images/service2.png"
                  className="w-100"
                  alt=""
                />
                <h3>Установка</h3>
                <p>Стиральные машины</p>
                <p>Услуги сантехники</p>
              </div>
              <Button className="myBtn" variant="contained">
                Заказать услугу
              </Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h4>Гарантия от 6 месяцев до 4 лет</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

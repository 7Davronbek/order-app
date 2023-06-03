const Contacts = () => {
  return (
    <div className="Contacts">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-between">
              <div className="col-12">
                <h1 className="text-center">Контакты</h1>
              </div>
              <div className="col-lg-3">
                <h2>График работы </h2>
                <p>
                  Пн - Пт с 10:00 - 19:00 Сб - Вс и праздники: c 11:00 - 18:00
                </p>
              </div>
              <div className="col-lg-3">
                <h2>Номера</h2>
                <a href="tel:+998 90 123 45 67">+998 90 123 45 67</a>
                <a href="tel:+998 90 123 45 67">+998 90 123 45 67</a>
              </div>
              <div className="col-lg-3">
                <h2>Адресс</h2>
                <p>781 Sunny Forge Elsieville, WY 51994</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <iframe
                  className="w-100"
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47918.8752859945!2d69.24475400263043!3d41.35388160356982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef33583720a2b%3A0x73201d38ca481045!2z0JzQtdCz0LAg0J_Qu9Cw0L3QtdGC!5e0!3m2!1sru!2s!4v1685835313410!5m2!1sru!2s"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

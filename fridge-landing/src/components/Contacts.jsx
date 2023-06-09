import { getText } from "../locales";

const Contacts = () => {
  return (
    <div id="contact" className="Contacts">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="row justify-content-between">
              <div className="col-12">
                <h1 className="text-center">Контакты</h1>
              </div>
              <div className="col-lg-3">
                <h2>{getText("c1")} </h2>
                <p>{getText("c2")}</p>
              </div>
              <div className="col-lg-3">
                <h2>{getText("c3")}</h2>
                <a href="tel:+998 98 128 99 95">+998 98 128 99 95</a>
              </div>
              <div className="col-lg-3">
                <h2>{getText("c4")}</h2>
                <p>{getText("c5")}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <iframe
                  className="w-100"
                  title="Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.5221740232977!2d69.23177989501815!3d41.28517405917598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a5bba91b4ed%3A0x73d49938dbeb065e!2zMjQg0YPQu9C40YbQsCDQkNGA0L3QsNGB0LDQuSwg0KLQsNGI0LrQtdC90YIgMTAwMTE1LCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1658819649015!5m2!1sru!2s"
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

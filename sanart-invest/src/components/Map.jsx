import React from "react";

const Map = () => {
  return (
    <>
      <div className="Map">
        <div className="for_map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2367.1527786292068!2d69.33445755413912!3d41.34245044839843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1698326024499!5m2!1sru!2s"
            height="450"
            className="map_frame"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="lokatsiya_box">
                  <div className="lokatsiya_name">Локация</div>
                  <div className="address_h">Адрес</div>
                  <div className="address_p">
                    г. Ташкент, Истикбол, д. 7, кв. 34
                  </div>
                  <div className="call_center_box">
                    <div className="call_center_h">Номер Call-центра:</div>
                    <div className="call_center_p">+998 78 150-11-11</div>
                  </div>
                  <div className="lokatsiya_btn">Записаться на встречу</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;

import React from "react";

const Contact = () => {
  return (
    <>
      <div className="Contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="con_name">Контакты</div>
            </div>
            <div className="col-3 d-flex flex-column align-items-center ">
              <img className="con_icon" src="/img/icon_foot_1.png" alt="" />
              <div className="foot_h">Горячая линия</div>
              <div className="foot_p">+998 (71) 777-77-77</div>
            </div>
            <div className="col-3 d-flex flex-column align-items-center ">
              <img className="con_icon" src="/img/icon_foot_2.png" alt="" />
              <div className="foot_h">Рабочее время</div>
              <div className="foot_p">Понедельник – пятница, с 9:00 до 18:00</div>
            </div>
            <div className="col-3 d-flex flex-column align-items-center ">
              <img className="con_icon" src="/img/icon_foot_3.png" alt="" />
              <div className="foot_h">Адрес</div>
              <div className="foot_p">100000, г.Ташкент, улица Шока Амира Темура, дом 6</div>
            </div>
            <div className="col-3 d-flex flex-column align-items-center ">
              <img className="con_icon" src="/img/icon_foot_4.png" alt="" />
              <div className="foot_h">Электронная почта</div>
              <div className="foot_p">info@sanartauction.uz</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

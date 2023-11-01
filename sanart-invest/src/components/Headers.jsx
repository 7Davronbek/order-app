import React from "react";

const Headers = () => {
  return (
    <>
      <div className="Headers">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="header_box">
                <div className="header_h">Fayzli makon</div>
                <div className="header_p">
                  Благодаря услугам веб-дизайна клиенты получают инновационные и
                  эффективные дизайны веб-сайтов, которые привлекают внимание к
                  брендам.
                </div>
                <div className="header_btn">Оставить зaявку</div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_img_1">
          <img src="img/h1.svg" alt="" />
        </div>
        <div className="header_img_2">
          <img src="img/h2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Headers;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

const Footer = (message) => {
  const [phone, setPhone] = useState("+998");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [success, setSuccess] = useState(false);
  const [successText, setSuccessText] = useState("");

  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-3">
              <img src="/img/Logo_2.png" alt="" className="foot_img" />

              <div className="foot_h">
                Оставьте свой номер телефона и мы свяжемся с вами!
              </div>

              <form action="" className="foot_form">
                <InputMask
                  mask={"+999 (99) 999 99 99"}
                  placeholder="+998 (__) ___ __ __"
                  type="text"
                  className="form_inp"
                  value={phone}
                  onChange={(e) => {
                    setPhone(
                      e.target.value
                        .replaceAll("_", "")
                        .replace("(", "")
                        .replace(")", "")
                        .replaceAll(" ", "")
                    );
                  }}
                />
                <button
                  onClick={(e) => {
                    if (phone.length > 12) {
                      getInTouch(e);
                    } else {
                      e.preventDefault();
                      setErrorText(
                       
                      );
                      setError(true);
                    }
                  }}
                  className="form_btn"
                >
                  Отправить
                </button>
              </form>
            </div>
            <div className="col-lg-8 col-md-8 col-12 d-flex align-items-center justify-content-between">
              <div
                className={
                  "d-flex flex-row justify-content-between align-items-center flex-wrap w-100"
                }
              >
                <div
                  className="foot_link pointer"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  О нас
                </div>

                <div
                  className="foot_link pointer"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  О проекте
                </div>

                <div
                  className="foot_link pointer"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Новости
                </div>

                <div
                  className="foot_link pointer"
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  Контакты
                </div>

              </div>

              {error ? (
                <Alert
                  errorText={errorText}
                  setError={setError}
                  setErrorText={setErrorText}
                />
              ) : (
                ""
              )}

              {success ? (
                <AlertSuccess
                  successText={successText}
                  setSuccess={setSuccess}
                  setSuccessText={setSuccessText}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

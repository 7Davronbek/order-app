import React, { useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../constants";
import axios from "axios";

export default function Header() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [isLoading, setIsLoading] = useState(false);

  let text = `Name: ${name}.%0APhone number: ${phone}.`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (phone.length !== 19) {
      toast.error("Phone number is required. Try again.");
      setIsLoading(false);
    } else {
      axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );

      toast.success(`Success!`);
      setIsLoading(false);
      setName("");
      setPhone("+998");
    }
  };

  return (
    <header id="about-us" className="Header">
      <div className="container">
        <div className="row">
          <div className="header-info col-12 col-md-8">
            <h2>
              {" "}
              натяжные потолки <br />в Ташкенте от <br />
              <span>90.000 сум</span>
            </h2>
            <p>
              Бесплатный замер, дизайн и монтаж
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31"
                height="25"
                viewBox="0 0 31 25"
                fill="none"
              >
                <path
                  d="M13.244 24.4523C12.9612 24.7659 12.4719 24.7898 12.1568 24.5054L0.245605 13.7537C-0.0694855 13.4693 -0.083185 12.9908 0.214826 12.6903L4.00979 8.8658C4.30798 8.5653 4.80971 8.55223 5.1248 8.83645L11.6314 14.7093C11.9465 14.9937 12.4358 14.9698 12.7186 14.6562L25.4303 0.570048C25.7132 0.256476 26.2138 0.220673 26.5424 0.490637L30.7267 3.92534C31.0555 4.19514 31.093 4.67262 30.81 4.98619L13.244 24.4523Z"
                  fill="#FFE600"
                />
              </svg>
              <br />
              Форма оплаты любая
            </p>

            <button className="second-header-button">Заказать звонок</button>

            <div className="arrow">
              <svg
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="12"
                viewBox="0 0 180 12"
                fill="none"
              >
                <path
                  d="M180 6.00003L170 0.226527L170 11.7735L180 6.00003ZM-1.74846e-07 7L171 7.00003L171 5.00003L1.74846e-07 5L-1.74846e-07 7Z"
                  fill="#070707"
                />
              </svg>
            </div>
          </div>

          <form
            onSubmit={sendFeedback}
            className="col-md-4 contact-form"
            action=""
          >
            <h3>Оставьте заявку</h3>
            <h4>Мы свяжемся с вами!</h4>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-12"
              type="text"
              name="name"
              id="name"
              placeholder="Ваше имя"
            />

            <InputMask
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              mask="+998 (99) 999-99-99"
              maskChar=""
              id="phone"
              type="text"
              placeholder="+998 (_) _ _ _"
              className="col-12"
            />

            <button disabled={isLoading} type="submit">
              {" "}
              {isLoading && (
                <i className="spinner-border spinner-border-sm text-white me-2"></i>
              )}
              Заказать звонок
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

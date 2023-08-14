/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { CHAT_ID, TOKEN } from "../constants";

const Feedback = () => {
  const [activeTab, setActiveTab] = useState("0");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [desription, setDescription] = useState("");

  let text = `Name: ${name}.%0AMessage: ${desription}.%0AMy phone number: +${phone}.%0AMy phone number: +${email}`;

  const sendFeedback = (e) => {
    e.preventDefault();
    const { data } = axios.post(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
    );
  };

  return (
    <div className="Feedback">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>ОСТАВЬТЕ ЗАЯВКУ</h1>
            <h2>
              Расскажите о своем проекте, и мы с удовольствием включимся в него
              на любом этапе
            </h2>

            <div className="top">
              <div className="wrap">
                <label htmlFor="name">КАК ВАС ЗОВУТ?</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Фамилия Имя"
                  className="form-control"
                />
              </div>
              <div className="line"></div>
              <div className="wrap">
                <label htmlFor="phone">ВАШ ТЕЛЕФОН</label>
                <input
                  id="phone"
                  type="text"
                  placeholder="+998 (_) _ _ _"
                  className="form-control"
                />
              </div>
              <div className="line"></div>
              <div className="wrap">
                <label htmlFor="email">ВАШ E-MAIL</label>
                <input
                  id="email"
                  type="text"
                  placeholder="company@email"
                  className="form-control"
                />
              </div>
            </div>

            <div className="bottom">
              <h3>ПЛАНИРУЕМЫЙ БЮДЖЕТ</h3>
              <div className="bottomWrap">
                <div
                  onClick={() => toggle("0")}
                  className={`myBtn btn ${activeTab == "0" ? "active" : ""} `}
                >
                  ДО 3 МЛН.
                </div>
                <div
                  onClick={() => toggle("1")}
                  className={`myBtn btn ${activeTab == "1" ? "active" : ""} `}
                >
                  3-5 МЛН.
                </div>
                <div
                  onClick={() => toggle("2")}
                  className={`myBtn btn ${activeTab == "2" ? "active" : ""} `}
                >
                  5-8 МЛН.
                </div>
                <div
                  onClick={() => toggle("3")}
                  className={`myBtn btn ${activeTab == "3" ? "active" : ""} `}
                >
                  ОТ 8 МЛН.
                </div>
              </div>

              <label htmlFor="placeholder">
                ОПИШИТЕ ЗАДАЧУ, КОТОРУЮ ХОТИТЕ
              </label>
              <input
                id="placeholder"
                type="text"
                placeholder="Помните поговорку: «Краткость — сестра таланта»"
                className="form-control"
              />

              <button onClick={sendFeedback} className="btn myBtn bottomBtn">
                ОТПРАВИТЬ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { CHAT_ID, TOKEN } from "../constants";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";

const Feedback = () => {
  const [activeTab, setActiveTab] = useState("0");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("+998");

  const [email, setEmail] = useState("");
  const [desription, setDescription] = useState("");
  const [budget, setBudget] = useState("ДО 3 МЛН");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Name: ${name}.%0ABudget: ${budget}.%0AMessage: ${desription}.%0APhone number: ${phone}%0AEmail: ${
    email.length == 0 ? "Email is empty" : email
  }.`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (phone.length !== 19) {
      toast.error("Phone number is required. Try again.");
      setIsLoading(false);
    } else {
      const { data } = axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );
      toast.success(`Success!`);
      setIsLoading(false);
      setName("");
      setPhone("");
      setDescription("");
      setEmail("");
      setActiveTab("0");
      setBudget("ДО 3 МЛН");
    }
  };

  return (
    <div className="Feedback">
      <div className="container">
        <div className="row">
          <form onSubmit={sendFeedback} className="col-12">
            <h1>ОСТАВЬТЕ ЗАЯВКУ</h1>
            <h2>
              Расскажите о своем проекте, и мы с удовольствием включимся в него
              на любом этапе
            </h2>

            <div className="top">
              <div className="wrap">
                <label htmlFor="name">КАК ВАС ЗОВУТ*</label>
                <input
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  type="text"
                  placeholder="Фамилия Имя"
                  className="form-control"
                />
              </div>
              <div className="line"></div>
              <div className="wrap">
                <label htmlFor="phone">ВАШ ТЕЛЕФОН*</label>
                <InputMask
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  mask="+998 (99) 999-99-99"
                  maskChar=""
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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="company@email"
                  className="form-control"
                />
              </div>
            </div>

            <div className="bottom">
              <h3>ПЛАНИРУЕМЫЙ БЮДЖЕТ*</h3>
              <div className="bottomWrap">
                <div
                  onClick={() => {
                    toggle("0"), setBudget("ДО 3 МЛН");
                  }}
                  className={`myBtn btn ${activeTab == "0" ? "active" : ""} `}
                >
                  ДО 3 МЛН.
                </div>
                <div
                  onClick={() => {
                    toggle("1"), setBudget("3-5 МЛН");
                  }}
                  className={`myBtn btn ${activeTab == "1" ? "active" : ""} `}
                >
                  3-5 МЛН.
                </div>
                <div
                  onClick={() => {
                    toggle("2"), setBudget("5-8 МЛН");
                  }}
                  className={`myBtn btn ${activeTab == "2" ? "active" : ""} `}
                >
                  5-8 МЛН.
                </div>
                <div
                  onClick={() => {
                    toggle("3"), setBudget("ОТ 8 МЛН");
                  }}
                  className={`myBtn btn ${activeTab == "3" ? "active" : ""} `}
                >
                  ОТ 8 МЛН.
                </div>
              </div>

              <label htmlFor="placeholder">
                ОПИШИТЕ ЗАДАЧУ, КОТОРУЮ ХОТИТЕ*
              </label>
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={desription}
                required
                id="placeholder"
                type="text"
                placeholder="Помните поговорку: «Краткость — сестра таланта»"
                className="form-control"
              />

              <button
                disabled={isLoading}
                type="submit"
                className={`btn myBtn bottomBtn `}
              >
                {isLoading && (
                  <i className="spinner-border spinner-border-sm text-dark me-2"></i>
                )}
                ОТПРАВИТЬ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

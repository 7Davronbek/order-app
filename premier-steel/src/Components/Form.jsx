import React, { useState } from 'react'
import axios from "axios";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../Constants";
import { useTranslation } from "react-i18next";


export default function Form(changeLang) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [model, setModel] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Ismi: ${name}.%0ATelefon raqami: ${phone}`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (phone.length !== 19) {
      toast.error("Требуется номер телефона. Попробуйте еще раз.");
      setIsLoading(false);
    } else {
      const { data } = axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );

      toast.success(`Завершено успешно. Дождитесь обратного звонка!`);
      setIsLoading(false);
      setName("");
      setPhone("+998");
    }
  };

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  return (
    <section className='Form'>
      <div className="container">
        <form onSubmit={sendFeedback} className='zayafka' action="">
          <h2>{t("formTittle")}</h2>
          <p>{t("formText")}</p>

          <div className='input-body'>
            <input  placeholder={t("inputName")} type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name" />
            <InputMask
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  mask="+998 (99) 999-99-99"
                  maskChar=""
                  id="phone"
                  type="text"
                  placeholder="+998 (_) _ _ _"
                />
                <button  disabled={isLoading} type="submit">
              {" "}
              {isLoading && (
                <i className="spinner-border spinner-border-sm text-white me-2"></i>
              )}
              {t("send")}
            </button>
          </div>

        </form>
      </div>
    </section>
  )
}

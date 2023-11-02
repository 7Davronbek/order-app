import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../constants";
import InputMask from "react-input-mask";

export default function Contact() {
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
      const { data } = axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );

      toast.success(`Success!`);
      setIsLoading(false);
      setName("");
      setPhone("+998");
    }
  };
  return (
    <section id="contacts" className="Contact">
      <div className="container">
        <div className="row">
          <h2>ЛОКАЦИЯ</h2>

          <div className="contact-body">
            <form
              onSubmit={sendFeedback}
              className="col-4 contact-form"
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
      </div>
    </section>
  );
}

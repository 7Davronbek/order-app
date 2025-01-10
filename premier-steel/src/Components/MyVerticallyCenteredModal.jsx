import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../Constants";

export default function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [model, setModel] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Ismi: ${name}.%0ATelefon raqami: ${phone}.%0AXabar : ${model}`;

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
      setModel("");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='ModalForm'
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Заполните форму и мы свяжемся с вами 
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body className='modal-body'>
        <form onSubmit={sendFeedback} action="">
            <div className="row">
              <h3>Получите консультацию от менеджера</h3>
              <div className="col-12 mb-4">
                <input 
                className="col-12" 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                id="name" placeholder='Имя' />
              </div>
              <div className="col-12 mb-4">
                <InputMask
                  className="col-12"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  mask="+998 (99) 999-99-99"
                  maskChar=""
                  id="phone"
                  type="text"
                  placeholder="+998 (_) _ _ _"
                />
              </div>
              <div className="col-12 mb-4">
                <textarea  value={model}
                onChange={(e) => setModel(e.target.value)} className='col-12' name="name" id="name" cols="30" rows="10" placeholder='Опишите Ваше обращение в кратце, мы Вам перезвоним и обсудим детали вместе'></textarea>

              </div>
            </div>
            <button className='col-12' disabled={isLoading} type="submit">
              {" "}
              {isLoading && (
                <i className="spinner-border spinner-border-sm text-white me-2"></i>
              )}
              Заказать
            </button>

          </form>
      </Modal.Body>
      
    </Modal>
  )
}

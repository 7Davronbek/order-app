import React, { useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../constants";
import Modal from 'react-bootstrap/Modal';

export default function MyVerticallyCenteredModal(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [model, setModel] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Ismi 👤: ${name}.%0ATelefon raqami 📞: ${phone}`;

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

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='MyVerticallyCenteredModal'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body closeButton>
        <form onSubmit={sendFeedback} action="">
          <h4 className='mb-3'>Обратный звонок</h4>
          <input placeholder='Ваше имя' className='modal-input mb-3' type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name" />
          <InputMask value={phone}
          className='modal-input mb-3'
            onChange={(e) => setPhone(e.target.value)}
            mask="+998 (99) 999-99-99"
            maskChar=""
            id="phone"
            type="text"
            placeholder="+998 (_) _ _ _" />
          <button disabled={isLoading} type="submit" className='btn btn-success'>Заказать звонок</button>
        </form>
      </Modal.Body>
      
    </Modal>
  )
}

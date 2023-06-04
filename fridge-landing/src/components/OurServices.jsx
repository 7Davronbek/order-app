/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Alert, Typography } from "@mui/material";
import { CHAT_ID, TOKEN } from "../constants";

const OurServices = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [active, setActive] = useState(false);

  const handleOpen = (e) => {
    setOpen(true);
    setType(e);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  let text = `Name: ${name}.%0AMessage: ${type}.%0AMy phone number: +${phone}`;

  const send = (e) => {
    setActive(true);
    e.preventDefault();
    const { data } = axios.post(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
    );
    setName("");
    setType("");
    setPhone("");
    setOpen(false);
    setTimeout(() => {
      setActive(false);
    }, 2000);
  };

  return (
    <>
      <div id="service" className="OurServices">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Наши услуги</h1>
              <h2>Работаем со всеми видами техники</h2>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-lg-5">
              <div className="cards">
                <img
                  loading="lazy"
                  src="/images/service1.png"
                  className="w-100"
                  alt=""
                />
                <h3>Ремонт бытовой техники</h3>
                <p>Стиральные машины</p>
                <p>Холодильники</p>
                <p>Морозильники</p>
                <p>Витрины</p>
                <p>Духовки</p>
                <p>Пылесосы</p>
                <p>Микроволновки</p>
                <p>Телевизоры</p>
                <Button
                  onClick={(e) => handleOpen("Ремонт бытовой техники")}
                  className="myBtn"
                  variant="contained"
                >
                  Заказать услугу
                </Button>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="cards second">
                <div>
                  <img
                    loading="lazy"
                    src="/images/service2.png"
                    className="w-100"
                    alt=""
                  />
                  <h3>Установка</h3>
                  <p>Стиральные машины</p>
                  <p>Услуги сантехники</p>
                </div>
                <Button
                  onClick={(e) => handleOpen("Установка бытовой техники")}
                  className="myBtn"
                  variant="contained"
                >
                  Заказать услугу
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <h4>Гарантия от 6 месяцев до 4 лет</h4>
            </div>
          </div>
        </div>
      </div>

      <Modal
        className="myModal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={send}>
          <Box className="box" sx={style}>
            <Typography
              className="h1"
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              Оставить заявку
            </Typography>
            <TextField
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="standard-basic"
              fullWidth
              label="Enter name"
              variant="standard"
            />
            <TextField
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="standard-basic"
              fullWidth
              label="Enter phone number"
              variant="standard"
              placeholder="+998"
              type="number"
            />
            <Button type="submit" className="myBtn" variant="contained">
              Отправить
            </Button>
          </Box>
        </form>
      </Modal>

      <Alert
        className={`successAlert d-flex align-items-center ${active ? "active" : ""}`}
        variant="filled"
        severity="success"
      >
        <h5>Tez orada aloqaga chiqamiz.</h5>
      </Alert>
    </>
  );
};

export default OurServices;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH, CONFIG, ORDER_ID, TOKEN } from "../constants";
import { toast } from "react-toastify";

const Buy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handlePost2 = async (e) => {
    const token = localStorage.getItem(TOKEN);
    if (!token) {
      navigate("/login", { replace: true });
    }
    const { data } = await axios.post(
      API_PATH + "order/order-create/",
      {
        type_order: content,
      },
      CONFIG
    );
    if (data) {
      localStorage.setItem(ORDER_ID, data.order_id);
      navigate("/pay", { replace: true });
    } else {
      toast.error("Invalid order")
    }
  };

  const handlePost = () => {};
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`myModal ${isOpen && "active"}`}
      >
        <div className="cards">
          <div onClick={() => handlePost("click")} className="pay">
            <img src="/img/click.svg" alt="" />
          </div>
          <div onClick={() => handlePost2("payme")} className="pay">
            <img src="/img/pay.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="Buy">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <img className="buy_logo" src="/logo.png" alt="" />
            </div>
            <div className="col-12">
              <div className="b_h_1">{` “Baxtli ayol” kursini o'tish va sotib olish bo'yicha`}</div>
              <div className="b_h_1">{`
Yo'riqnoma`}</div>
              <div className="b_name">
                “Baxtli ayol” kursi 4 oyni tashkil etadi.
              </div>
              <div className="b_h_2">
                <span>1 – BOSQIChDA</span> Kursni sotib olishdan oldin biz siz
                bilan eng avvalam bor o'zingizda bor bo'lgan barcha
                muammolaringizni aniqlab olishimiz kerak bo'ladi. Bu uchun
                <Link to="" className="b_h_2_2">
                  quyidagi havola orqali o'tsangiz bo'ladi{" "}
                </Link>
              </div>

              <div className="b_h_2">
                <span>1 – BOSQIChDA</span> Kursni sotib olishdan oldin biz siz
                bilan eng avvalam bor o'zingizda bor bo'lgan barcha
                muammolaringizni aniqlab olishimiz kerak bo'ladi. Bu uchun
                <div className="b_h_2_2">
                  quyidagi havola orqali o'tsangiz bo'ladi
                </div>
              </div>

              <div className="b_name_2">NARXLAR</div>
              <div className="b_p_1">
                “Baxtli Ayol” kursining 4 oylik umumiy narxi
                <span>– 2.800.000 so'mni</span>tashkil etadi.
              </div>
              <div className="b_p_2">
                Biroq bizda bo'lib to'lash imkoniyati hamda chegirmalar ham bor.
              </div>
            </div>

            <div className="col-4">
              <div className="b_box">
                <div className="b_up">
                  <div className="b_up_h">Oyma-oy</div>
                  <div className="b_up_h_2">700 ming so'mdan</div>
                  <div className="b_up_h">to'lab o'qish</div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(true), setContent("month");
                  }}
                  className="b_link btn"
                  to=""
                >
                  Sotib olish
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="b_box">
                <div className="b_up">
                  <div className="b_up_h">Oyma-oy</div>
                  <div className="b_up_h_2">700 ming so'mdan</div>
                  <div className="b_up_h">to'lab o'qish</div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(true), setContent("week");
                  }}
                  className="b_link btn"
                  to=""
                >
                  Sotib olish
                </button>
              </div>
            </div>
            <div className="col-4">
              <div className="b_box">
                <div className="b_up">
                  <div className="b_up_h">
                    Kursni<span>(20 % chegirma bilan)</span>bir marttalik to'lov
                    qilib sotib olish
                  </div>
                  <div className="b_up_h_2">2.800.000 so'm emas,</div>
                  <div className="b_up_h_3">2 mln 240 ming so'm</div>
                  <div className="b_up_h">to'lab o'qish</div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(true), setContent("full");
                  }}
                  className="b_link btn"
                  to=""
                >
                  Sotib olish
                </button>
              </div>
            </div>
            <div className="col-12 mt-5">
              <div className="b_h_2">
                <span>1 – BOSQIChDA</span>Kursni sotib olishdan oldin biz siz
                bilan eng avvalam bor o'zingizda bor bo'lgan barcha
                muammolaringizni aniqlab olishimiz kerak bo'ladi. Bu uchun
              </div>

              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                Ushbu test savollariga javobi berish uchun sizga
                <span> 2 kun </span>vaqt beriladi.
              </div>

              <div className="b_h_2">
                <span>1 – BOSQIChDA</span>Kursni sotib olishdan oldin biz siz
                bilan eng avvalam bor o'zingizda bor bo'lgan barcha
                muammolaringizni aniqlab olishimiz kerak bo'ladi. Bu uchun
              </div>

              <div className="b_h_4">
                <img src="/icon_cor.png" alt="" />
                Ushbu test savollariga javobi berish uchun sizga vaqt beriladi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;

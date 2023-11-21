import React from "react";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <>
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
                <Link className="b_link" to="">
                  Sotib olish
                </Link>
              </div>
            </div>
            <div className="col-4">
              <div className="b_box">
                <div className="b_up">
                  <div className="b_up_h">Oyma-oy</div>
                  <div className="b_up_h_2">700 ming so'mdan</div>
                  <div className="b_up_h">to'lab o'qish</div>
                </div>
                <Link className="b_link" to="">
                  Sotib olish
                </Link>
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
                <Link className="b_link" to="">
                  Sotib olish
                </Link>
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

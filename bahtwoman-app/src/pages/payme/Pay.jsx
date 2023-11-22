import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH, CONFIG } from "../../constants";
import { getText } from "../../locale";
import { RegistrationLayout } from "../../components";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";

const Pay = () => {
  const [name, setName] = useState(localStorage.getItem("NAME") || "");
  const [price, setPrice] = useState(localStorage.getItem("PRICE") || "");

  const [card, setCard] = useState("");
  const [num, setNum] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const navigate = useNavigate();

  const post = (e) => {
    e.preventDefault();

    // var input_id = document.getElementById("inp_id");
    // var input_id2 = document.getElementById("inp_id2");
    // if (input_id.value.length < 16) {
    //   alert("Ma'lumotlarni to'gri kiriting");
    // } else if (input_id2.value.length < 4) {
    //   alert("Ma'lumotlarni to'gri kiriting");
    // } else {
    //   navigate("/parol");
    // }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("number", card);
    formData.append("expire", num);

    if (card.length > 0 && num.length > 0) {
      axios
        .post(API_PATH + `order/card-create/`, formData, CONFIG)
        .then((res) => {
          setIsLoading(false);
          localStorage.setItem("TOKEN", res.data.token);
          console.log(res.data.token);
          navigate("/parol");
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error("Invalid order")
        });
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="Pay">
        <RegistrationLayout />
        <div className="row pay_box">
          <div className="col-lg-12 pay_left">
            <div className="logo">
              <img src="/img/logo.svg" alt="" />
            </div>
            <div className="pay_card_h">
              <span>"Baxtli ayol"</span> kursini sotib olish
            </div>
            <form onSubmit={post} action="">
              <div className="pay_card">
                <div className="pay_card_name">{price ? price : ""}</div>
                <div className="pay_card_inp_box">
                  <InputMask
                    onChange={(e) => setCard(e.target.value)}
                    value={card}
                    mask="9999 9999 9999 9999"
                    maskChar="0"
                    placeholder="Karta raqami"
                    id="phone"
                    type="text"
                    className="pay_card_inp form-control"
                  />

                  <InputMask
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                    mask="99 / 99"
                    maskChar="_"
                    placeholder="MM / YY"
                    id="phone"
                    type="text"
                    className="pay_card_inp form-control"
                  />
                </div>
                <button
                  
                  className="pay_a btn myBtn"
                  disabled={isLoading}
                  type="submit"
                >
                  Tasdiqlash
                </button>
              </div>
            </form>
            <div className="pay_click_box">
              <div className="pay_click">
                <img src="/img/pay.svg" alt="" />
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6 pay_right">
                        <img src="/image/pay_right.svg" alt="" className="pay_right_img" />
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Pay;

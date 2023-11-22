import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_PATH, CONFIG } from "../../constants";
import { getText } from "../../locale";
import { RegistrationLayout } from "../../components";
import { toast } from "react-toastify";

const Parol = () => {
  const [isLoading, setIsLoading] = useState("");
  const [parol, setParol] = useState("");

  const PayLast = () => {
    const formData2 = new FormData();
    axios
      .post(API_PATH + `/order/payment/`, formData2, CONFIG)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const navigate = useNavigate();

  const post = (e) => {
    e.preventDefault();
    // var input_id = document.getElementById("inp_id");
    // if (input_id.value === "") {
    //   alert("Ma'lumotlarni to'gri kiriting");
    // } else {
    //   navigate("/parol");
    // }
    // navigate('/parol')
    setIsLoading(true);

    const formData = new FormData();

    formData.append("verify_code", parol);
    formData.append("token", localStorage.getItem("TOKEN"));

    if (parol.length > 0) {
      axios
        .post(API_PATH + `order/verify-phone/`, formData, CONFIG)
        .then((res) => {
          navigate("/start-questions-modal");
          PayLast();
          setIsLoading(false);
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
      <div className="Parol">
        <RegistrationLayout />
        <div className="row pay_box">
          <div className="col-lg-12 pay_left">
            <div className="logo">
              <img src="/img/logo.svg" alt="" />
            </div>
            <div className="pay_card_h">To'lovni tasdiqlash </div>
            <form onSubmit={post}>
              <div className="pay_card">
                <div className="pay_card_name">
                  Tasdiqlash kodini kiriting!{" "}
                </div>
                <div className="pay_card_inp_box">
                  <input
                    onChange={(e) => setParol(e.target.value)}
                    placeholder="123456"
                    maxLength={6}
                    minLength={6}
                    pattern="\d*"
                    name=""
                    id="inp_id"
                    className="py-4 form-control"
                  />
                </div>
                <button
                  disabled={isLoading}
                  className="btn myBtn"
                  type="submit"
                >
                  To'lov
                </button>
              </div>
            </form>
          </div>
          {/* <div className="col-lg-6 pay_right">
                        <img src="/image/pay_right.svg" alt="" className="pay_right_img" />
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Parol;

import logo from "@/assets/logo.svg";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import { BOT_TOKEN, CHAT_ID } from "../../../constants";

const Feedback = () => {
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
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );
      toast.success(`Ma'lumotlaringiz jo'natildi!`);
      setIsLoading(false);
      setName("");
      setPhone("+998");
    }
  };
  return (
    <>
      <div className="Feedback">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h1 className="bold">Бизга боғланинг </h1>
              <form onSubmit={sendFeedback} className="cards">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="FISH"
                  type="text"
                  className="form-control "
                />

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

                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn myBtn roman"
                >
                  {isLoading && (
                    <i className="spinner-border spinner-border-sm text-dark me-2"></i>
                  )}
                  Йубориш
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="Logo">
        <img src={logo} alt="" />
      </div>
    </>
  );
};

export default Feedback;

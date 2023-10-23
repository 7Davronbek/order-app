import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import { useState } from "react";
import axios from "axios";
import { PORT } from "../constants";
import { toast } from "react-toastify";

const Footer = () => {
  const [phone, setPhone] = useState("+998");
  const sendFeedback = async (e) => {
    e.preventDefault();

    if (phone.length !== 19) {
      toast.error("Phone number is required. Try again.");
      return;
    }

    const { data } = await axios.post(PORT + "/ru/contents/v1/get-in-touch/", {
      phone,
    });
    if (data.id) {
      setPhone("+998");
      toast.success("Phone number has been sent!");
    } else {
      toast.error("Internal error");
    }
  };
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-3">
              <img src="/img/logo.png" alt="" className="foot_img" />
              <div className="foot_h">
                Telefon raqamingizni qoldiring va biz sizga aloqaga chiqamiz !
              </div>
              <form onSubmit={sendFeedback} className="foot_form">
                <InputMask
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  mask="+998 (99) 999-99-99"
                  maskChar=""
                  id="phone"
                  type="text"
                  placeholder="+998 (_) _ _ _"
                  className="form_inp"
                />

                <button type="submit" className="form_btn">
                  Yuborish
                </button>
              </form>
            </div>
            <div className="col-8 d-flex align-items-center justify-content-between">
              <Link className="foot_link" to="">
                Lotlar
              </Link>
              <Link className="foot_link" to="">
                Auksion haqida
              </Link>
              <Link className="foot_link" to="">
                Interaktiv xizmatlar
              </Link>
              <Link className="foot_link" to="">
                Markaz haqida
              </Link>
              <Link className="foot_link" to="">
                Yangiliklar
              </Link>
              <Link className="foot_link" to="">
                Bog’lanish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

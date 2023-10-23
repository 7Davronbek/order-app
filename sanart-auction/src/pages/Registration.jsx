import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <>
      <div className="Registration">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="reg_box">
                <div className="reg_box_name">Ro‘yxatdan o‘tish</div>
                <div className="reg_inp_box">
                  <img
                    className="reg_inp_img_1"
                    src="/img/icon_call.png"
                    alt=""
                  />
                  <input
                    placeholder="Telefon raqam"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="reg_inp_box">
                  <img
                    className="reg_inp_img_1"
                    src="/img/icon_lock.png"
                    alt=""
                  />
                  <img
                    className="reg_inp_img_2"
                    src="/img/icon_view_no.png"
                    alt=""
                  />
                  <input placeholder="Parol" type="text" name="" id="" />
                </div>
                <div className="reg_inp_box">
                  <img
                    className="reg_inp_img_1"
                    src="/img/icon_lock.png"
                    alt=""
                  />
                  <img
                    className="reg_inp_img_2"
                    src="/img/icon_view_no.png"
                    alt=""
                  />
                  <input
                    placeholder="Parolni qayta kiriting"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="reg_box_h">
                  Tasdiqlash tugmasini bosish orqali, Siz “Maxfiylik siyosati”
                  shartlariga roziligingizni bildirasiz!
                </div>
                <Link to="/registration-sign" className="reg_box_link">
                  Tasdiqlash
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;

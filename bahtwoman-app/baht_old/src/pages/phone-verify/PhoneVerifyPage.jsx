import InputMask from "react-input-mask";
import { RegistrationLayout } from "../../components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authAction } from "../../redux/AuthSlice";
import { CODE, PHONE } from "../../constants";

const PhoneVerifyPage = () => {
  const [verifyCode, setVerifyCode] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const codeVerify = () => {
    if (verifyCode.length !== 4) {
      toast.error("Code must be at least 4 characters.");
      return;
    }
    localStorage.setItem(CODE, verifyCode)
    dispatch(authAction.phoneVerify(localStorage.getItem(PHONE), localStorage.getItem(CODE)));
    navigate("/create-password");
  };
  return (
    <div className="PhoneVerifyPage Register">
      <RegistrationLayout />
      <div className="container">
        <div className="row">
          <div className="col-12 registerCenter">
            <div className="cards">
              <h1>Ro’yhatdan o’tish</h1>

              <div className="cardBody">
                <InputMask
                  value={verifyCode}
                  onChange={(e) => setVerifyCode(e.target.value)}
                  mask="9999"
                  maskChar="_"
                  placeholder="Tasdiqlash kodi"
                  id="phone"
                  type="text"
                  className="form-control"
                />
                <button onClick={() => codeVerify()} className="btn myBtn">
                  Yuborish
                </button>

                <Link to={"/login"}>Akkauntingiz bormi?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneVerifyPage;

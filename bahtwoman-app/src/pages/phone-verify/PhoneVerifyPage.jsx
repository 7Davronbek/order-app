import InputMask from "react-input-mask";
import { RegistrationLayout } from "../../components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PhoneVerifyPage = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
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
                value={code}
                onChange={(e) => setCode(e.target.value)}
                mask="999999"
                maskChar=""
                placeholder="Tasdiqlash kodi"
                id="phone"
                type="text"
                className="form-control"
              />
              <button
                onClick={() => navigate("/create-password")}
                className="btn myBtn"
              >
                Yuborish
              </button>

              <Link to={"/login"}>Akkauntingiz bormi?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PhoneVerifyPage

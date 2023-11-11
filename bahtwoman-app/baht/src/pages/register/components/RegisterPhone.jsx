/* eslint-disable no-unused-vars */
import { useState } from "react";
import { RegistrationLayout } from "../../../components";
import InputMask from "react-input-mask";
import { Link, useNavigate } from "react-router-dom";

const RegisterPhone = () => {
  const [phone, setPhone] = useState("+998");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="RegisterPhone Register">
      <RegistrationLayout />
      <div className="container">
        <div className="row">
          <div className="col-12 registerCenter">
            <div className="cards">
              <h1>Ro’yhatdan o’tish</h1>

              <div className="cardBody">
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
                  onClick={() => navigate("/phone-verify")}
                  className="btn myBtn"
                >
                  SMS jo’natish
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

export default RegisterPhone;

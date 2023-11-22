/* eslint-disable no-unused-vars */
import { useState } from "react";
import InputMask from "react-input-mask";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { RegistrationLayout } from "../../components";
import { authAction } from "../../redux/AuthSlice";

const Login = () => {
  const [phone, setPhone] = useState("+998");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    if (phone.length !== 19) {
      toast.error("Phone number must be at least 19 characters.");
      return;
    }
    dispatch(authAction.login({ phone, password, navigate }));
    // navigate("/phone-verify");
  };
  return (
    <div className="RegisterPhone Register">
      <RegistrationLayout />
      <div className="container">
        <div className="row">
          <div className="col-12 registerCenter">
            <div className="cards">
              <h1>Tizimga kirish</h1>

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
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                />
                <button onClick={() => login()} className="btn myBtn">
                  Kirish
                </button>

                <Link to={"/register"}>Akkauntingiz yo'qmi?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationLayout } from "../../components";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { authAction } from "../../redux/AuthSlice";

const CreatePasswordPage = () => {
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createPassword = () => {
    if (password !== verifyPassword) {
      toast.error("Password is incorrect");
      return;
    }
    dispatch(authAction.password(password));
    navigate("/start-questions-modal", { replace: true });
  };

  return (
    <div className="CreatePasswordPage Register">
      <RegistrationLayout />
      <div className="container">
        <div className="row">
          <div className="col-12 registerCenter">
            <div className="cards">
              <h1>Parol yaratish</h1>

              <div className="cardBody">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Parol"
                  type="password"
                  className="form-control"
                />
                <input
                  value={verifyPassword}
                  onChange={(e) => setVerifyPassword(e.target.value)}
                  placeholder="Parolni takrorlang"
                  type="password"
                  className="form-control"
                />
                <button onClick={() => createPassword()} className="btn myBtn">
                  Yuborish
                </button>

                {/* <Link to={"/login"}>Akkauntingiz bormi?</Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePasswordPage;

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setPhoneNumber } from "../../redux/UserSlice";

const PhoneNumberPage = () => {
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changePhone = (e) => {
    e.preventDefault();
    dispatch(setPhoneNumber({ phone }));
    localStorage.setItem("phone", phone);
    navigate("/education", { replace: true });
  };
  return (
    <div className="PhoneNumberPage ">
      <div className="center">
        <form onSubmit={changePhone} className="cards">
          <h1>4. Телефон рақамингиз</h1>

          <input
            placeholder="Telefon raqam"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control "
            required
          />

          <button type="submit" className="btn myBtn">
            Keyingi savol
          </button>
        </form>
      </div>
    </div>
  );
};

export default PhoneNumberPage;

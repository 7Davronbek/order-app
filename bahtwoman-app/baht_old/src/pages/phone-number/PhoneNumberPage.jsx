import { useNavigate } from "react-router-dom";

const PhoneNumberPage = () => {
  const navigate = useNavigate();
  return (
    <div className="PhoneNumberPage ">
      <div className="center">
        <div className="cards">
          <h1>5. Телефон рақамингиз</h1>

          <input
            placeholder="Telefon raqam"
            type="text"
            className="form-control "
          />

          <button onClick={() => navigate("/education")} className="btn myBtn">
            Keyingi savol
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumberPage;

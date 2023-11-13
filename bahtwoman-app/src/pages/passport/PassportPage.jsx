import { useNavigate } from "react-router-dom";

const PassportPage = () => {
  const navigate = useNavigate();
  return (
    <div className="PassportPage ">
      <div className="center">
        <div className="cards">
          <h1>3. Паспорт рақами ва берилган санаси</h1>
          <div className="d-flex align-items-center">
            <input
              type="text"
              placeholder="AA"
              className="form-control me-2 w-25"
            />
            <input
              type="text"
              placeholder="12345678"
              className="form-control "
            />
          </div>
          <input type="date" className="form-control " />

          <button onClick={() => navigate("/location")} className="btn myBtn">
            Keyingi savol
          </button>
        </div>
      </div>
    </div>
  );
};

export default PassportPage;

import { useNavigate } from "react-router-dom";

const EducationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="EducationPage ">
      <div className="center">
        <div className="cards">
          <h1>6. Маълумотингиз</h1>

          <input
            placeholder="Malumotingiz"
            type="text"
            className="form-control "
          />

          <button
            onClick={() => navigate("/family-status")}
            className="btn myBtn"
          >
            Keyingi savol
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;

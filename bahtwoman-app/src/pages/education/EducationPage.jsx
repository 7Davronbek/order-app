import { useNavigate } from "react-router-dom";
import { NavigationLayout } from "../../components";

const EducationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="EducationPage ">
      <NavigationLayout>
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
      </NavigationLayout>
    </div>
  );
};

export default EducationPage;

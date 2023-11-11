import { useNavigate } from "react-router-dom";
import { NavigationLayout } from "../../components";

const LocationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="LocationPage ">
      <NavigationLayout>
        <div className="center">
          <div className="cards">
            <h1>4. Манзилингиз</h1>

            <input placeholder="Manzil" type="text" className="form-control " />

            <button
              onClick={() => navigate("/phone-number")}
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

export default LocationPage;

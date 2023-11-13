import { useNavigate } from "react-router-dom";

const LocationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="LocationPage ">
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
    </div>
  );
};

export default LocationPage;

import { useNavigate } from "react-router-dom";
import { NavigationLayout } from "../../components";

const PhoneNumberPage = () => {
  const navigate = useNavigate();
  return (
    <div className="PhoneNumberPage ">
      <NavigationLayout>
        <div className="center">
          <div className="cards">
            <h1>5. Телефон рақамингиз</h1>

            <input placeholder="Telefon raqam" type="text" className="form-control " />

            <button
              onClick={() => navigate("/education")}
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

export default PhoneNumberPage;

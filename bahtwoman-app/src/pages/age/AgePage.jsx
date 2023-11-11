import { useNavigate } from "react-router-dom";
import { NavigationLayout } from "../../components";

const AgePage = () => {
  const navigate = useNavigate();
  return (
    <div className="AgePage ">
      <NavigationLayout>
        <div className="center">
          <div className="cards">
            <h1>2. Ёшингиз</h1>
            <input type="text" placeholder="Yosh" className="form-control" />

            <button onClick={() => navigate("/passport")} className="btn myBtn">
              Keyingi savol
            </button>
          </div>
        </div>
      </NavigationLayout>
    </div>
  );
};

export default AgePage;

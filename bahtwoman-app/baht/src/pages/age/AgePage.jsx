import { useNavigate } from "react-router-dom";

const AgePage = () => {
  const navigate = useNavigate();
  return (
    <div className="AgePage ">
        <div className="center">
          <div className="cards">
            <h1>2. Ёшингиз</h1>
            <input type="text" placeholder="Yosh" className="form-control" />

            <button onClick={() => navigate("/passport")} className="btn myBtn">
              Keyingi savol
            </button>
          </div>
        </div>
    </div>
  );
};

export default AgePage;

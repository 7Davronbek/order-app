import { useNavigate } from "react-router-dom";

const FirstLastNamePage = () => {
  const navigate = useNavigate();
  return (
    <div className="FirstLastNamePage ">
      <div className="center">
        <div className="cards">
          <h1>1. Фамилия, исм ва шарифингиз</h1>
          <input type="text" placeholder="Ism" className="form-control" />
          <input type="text" placeholder="Familiya" className="form-control" />
          <input type="text" placeholder="Sharif" className="form-control" />
          <button onClick={() => navigate("/age")} className="btn myBtn">
            Keyingi savol
          </button>
        </div>
        {/* <div className="feather">
            <img src={feather} alt="" />
          </div> */}
      </div>
    </div>
  );
};

export default FirstLastNamePage;

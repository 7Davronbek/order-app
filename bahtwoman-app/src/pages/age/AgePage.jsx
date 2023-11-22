import { useNavigate } from "react-router-dom";
import { setAges } from "../../redux/UserSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AgePage = () => {
  const [age, setAge] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeAge = (e) => {
    localStorage.setItem("age", age);
    e.preventDefault();
    dispatch(setAges({ age }));
    navigate("/location", { replace: true });
  };
  return (
    <div className="AgePage ">
      <div className="center">
        <form onSubmit={changeAge} className="cards">
          <h1>2. Ёшингиз</h1>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="text"
            placeholder="Yosh"
            className="form-control"
          />

          <button type="submit" className="btn myBtn">
            Keyingi savol
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgePage;

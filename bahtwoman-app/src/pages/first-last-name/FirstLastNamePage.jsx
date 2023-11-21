import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNames, userAction } from "../../redux/UserSlice";

const FirstLastNamePage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeFirstLastNameChange = (e) => {
    e.preventDefault();
    dispatch(setNames({ name, surname, lastName }));
    navigate("/age", { replace: true });
  };
  return (
    <div className="FirstLastNamePage ">
      <div className="center">
        <form onSubmit={changeFirstLastNameChange} className="cards">
          <h1>1. Фамилия, исм ва шарифингиз</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Ism"
            className="form-control"
            required
          />
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Familiya"
            className="form-control"
            required
          />
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Sharif"
            className="form-control"
            required
          />
          <button type="submit" className="btn myBtn">
            Keyingi savol
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirstLastNamePage;

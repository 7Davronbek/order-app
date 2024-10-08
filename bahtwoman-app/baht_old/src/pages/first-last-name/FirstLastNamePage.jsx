import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAction } from "../../redux/UserSlice";
import axios from "axios";
import { API_PATH, CONFIG } from "../../constants";

const FirstLastNamePage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeFirstLastNameChange = (e) => {
    e.preventDefault();
    dispatch(userAction.firstLastNameChange({name, surname, lastName}));
  };

  // const handle = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.patch(
  //     API_PATH + "/user/user-rud/",
  //     {
  //       name,
  //       last_name: surname,
  //       given_name: lastName,
  //     },
  //     CONFIG
  //   );
  // };
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

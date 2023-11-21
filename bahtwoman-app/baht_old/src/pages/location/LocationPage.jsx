import { useNavigate } from "react-router-dom";

const LocationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="LocationPage ">
      <div className="center">
        <div className="cards">
          <h1>4. Манзилингиз</h1>
          <select
            placeholder="Mamlakatni tanlang"
            className="form-control my_select"
            name="mamlakat"
            id="123"
          >
            <option
              selected
              disabled
              hidden
              value=""
            >{`Mamlakatni tanlang`}</option>
            <option value="">{`O'zbekiston`}</option>
            <option value="">{`Qozog'iston`}</option>
            <option value="">{`Tojikiston`}</option>
            <option value="">{`Qirg'iziston`}</option>
            <option value="">{`Avg'oniston`}</option>
          </select>

          <select
            placeholder=""
            className="form-control "
            name="viloyat"
            id="1234"
          >
            <option
              selected
              disabled
              hidden
              value=""
            >{`Viloyatni tanlang`}</option>
            <option value="">{`Andijon viloyati`}</option>
            <option value="">{`Buxoro viloyati`}</option>
            <option value="">{`Toshkent viloyati`}</option>
            <option value="">{`Xorazm viloyati`}</option>
          </select>
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

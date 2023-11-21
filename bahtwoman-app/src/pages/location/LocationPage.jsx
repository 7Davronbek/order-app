import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { API_PATH } from "../../constants";
import { setLocation } from "../../redux/UserSlice";

const LocationPage = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [countryName, setCountryName] = useState("");

  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState("");
  const [regionName, setRegionName] = useState("");

  const [districs, setDistrics] = useState([]);
  const [distric, setDistric] = useState("");
  const [districName, setDistricName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeLocation = (e) => {
    e.preventDefault();
    dispatch(setLocation(countryName + " " + regionName + " " + districName));
    navigate("/phone-number", { replace: true });
  };

  useEffect(() => {
    const getCountry = async () => {
      const { data } = await axios(API_PATH + "user/country/");
      setCountries(data);
    };
    getCountry();
  }, []);

  useEffect(() => {
    const getRegion = async () => {
      const { data } = await axios(
        API_PATH + "user/regions/?country_id=" + country
      );
      setRegions(data);
    };
    getRegion();
  }, [country]);

  useEffect(() => {
    const getDistric = async () => {
      const { data } = await axios(
        API_PATH + "user/districs/?region_id=" + region
      );
      setDistrics(data);
    };
    getDistric();
  }, [region]);

  const handleChangeCountry = (e) => {
    const selectedValue = e.target.value;
    setCountryName(selectedValue);

    const selectedItem = countries.find((item) => item.name === selectedValue);
    if (selectedItem) {
      setCountry(selectedItem.id);
    }
  };

  const handleChangeRegion = (e) => {
    const selectedValue = e.target.value;
    setRegionName(selectedValue);

    const selectedItem = countries.find((item) => item.name === selectedValue);
    if (selectedItem) {
      setRegion(selectedItem.id);
    }
  };

  const handleChangeDistric = (e) => {
    const selectedValue = e.target.value;
    setDistricName(selectedValue);

    const selectedItem = countries.find((item) => item.name === selectedValue);
    if (selectedItem) {
      setDistric(selectedItem.id);
    }
  };

  return (
    <div className="LocationPage ">
      <div className="center">
        <form onSubmit={changeLocation} className="cards">
          <h1>3. Манзилингиз</h1>
          <select
            placeholder="Mamlakatni tanlang"
            className="form-control my_select"
            name="mamlakat"
            id="123"
            onChange={handleChangeCountry}
          >
            <option
              selected
              disabled
              hidden
              value=""
            >{`Mamlakatni tanlang`}</option>
            {countries &&
              countries.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>

          <select
            placeholder=""
            className="form-control "
            name="viloyat"
            id="1234"
            onChange={handleChangeRegion}
          >
            <option
              selected
              disabled
              hidden
              value=""
            >{`Viloyatni tanlang`}</option>
            {regions &&
              regions.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>

          <select
            placeholder=""
            className="form-control "
            name="viloyat"
            id="1234"
            onChange={handleChangeDistric}
          >
            <option
              selected
              disabled
              hidden
              value=""
            >{`Manzilni tanlang`}</option>
            {districs &&
              districs.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
          </select>

          <button type="submit" className="btn myBtn">
            Keyingi savol
          </button>
        </form>
      </div>
    </div>
  );
};

export default LocationPage;

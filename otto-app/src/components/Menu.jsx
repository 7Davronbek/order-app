/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { API_PATH } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";
import { product } from "../db";
import { cartAction } from "../store/cartSlice";

const Menu = () => {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(cartAction.addToCart(item));
  };

  const getCategoryMenu = async () => {
    const { data } = await axios.get(
      API_PATH + "/main/product/?id=40c04cf5-2669-4156-8f50-cb5b72f18ac1"
    );
    setCategory(data);
  };

  useEffect(() => {
    // getCategoryMenu();
  }, [dispatch]);

  return (
    <div className="Menu">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <Link className="my-3 d-block mb-4" to={"/"}>
              <img src="/images/back.svg" alt="" /> Меню
            </Link>
            {product &&
              product.map((item, index) => (
                <div key={index} className="cards">
                  <img className="w-100" src={item.image} alt="" />
                  <div className="my-4 d-flex align-items-center justify-content-between">
                    <h1>{item.name}</h1>
                    <h2>{item.weight} кг</h2>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <h3>{item.price} сум</h3>
                    <h4>
                      <img
                        onClick={() => handleAddToCart(item)}
                        src="/images/plusOrange.svg"
                        alt=""
                      />
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

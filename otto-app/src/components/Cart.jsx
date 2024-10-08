import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { cartAction } from "../store/cartSlice";
import { CHAT_ID, TOKEN } from "../constants";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Cart = () => {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(cartAction.addToCart(item));
  };

  const handleDeleteFromCart = (item) => {
    dispatch(cartAction.decreaseFromCart(item));
  };

  const sendFeedback = async (e) => {
    let text = ``;
    for (let i = 0; i < cartItems.length; i++) {
      text += `---------------------------------------%0A%0AProduct: ${cartItems[i].name} %0APrice: ${cartItems[i].price}%0ACount: ${cartItems[i].itemQuantity}%0A%0A`;
    }

    text += '---------------------------------------%0APrice: ' + cartTotalAmount;

    e.preventDefault();
    await axios.post(
      `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
    );
    // dispatch(cartAction.clearCart())
    toast.success("Order sent successfully");
  };

  useEffect(() => {
    dispatch(cartAction.getTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="Cart">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <h6 onClick={() => navigate(-1)} className="my-3 d-block mb-4 cursor d-inline" to={"/"}>
              <img src="/images/back.svg" alt="" /> Back
            </h6>
            {cartItems.length === 0 ? (
              <h5 className="text-center py-5">Cart is empty.</h5>
            ) : (
              <>
                {cartItems.map((item, index) => (
                  <div key={index} className="cards">
                    <img className="w-100" src={item.image} alt="" />
                    <div className="my-4 d-flex align-items-center justify-content-between">
                      <h1>{item.name}</h1>
                      <h2>{item.weight} кг</h2>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h3>{item.price} сум</h3>
                      <h4>
                        <i>
                          <span
                            onClick={() => {
                              handleDeleteFromCart(item);
                            }}
                          >
                            -
                          </span>{" "}
                          {cartItems[index]?.itemQuantity}{" "}
                          <span onClick={() => handleAddToCart(item)}>+</span>{" "}
                        </i>
                      </h4>
                    </div>
                  </div>
                ))}
                <div onClick={sendFeedback} className="btn btn-dark">
                  Order
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

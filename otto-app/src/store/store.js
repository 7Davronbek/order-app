import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, productSlice } from ".";

const store = configureStore({
  reducer: {
    carts: cartSlice,
    products: productSlice,
  },
});

export default store;

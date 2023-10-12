import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { OTTO_CART_ITEMS } from "../constants";

const initialState = {
  cartItems: localStorage.getItem(OTTO_CART_ITEMS)
    ? JSON.parse(localStorage.getItem(OTTO_CART_ITEMS))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        toast.info(action.payload.name + " increased quantity");
        state.cartItems[itemIndex].itemQuantity += 1;
      } else {
        toast.success(action.payload.name + " added successfully");
        const tempProduct = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem(OTTO_CART_ITEMS, JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const nextCartItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = nextCartItem;
      localStorage.setItem(OTTO_CART_ITEMS, JSON.stringify(state.cartItems));
      toast.error(action.payload.name + " removed from cart");
    },

    decreaseFromCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
        toast.info(action.payload.name + " descreased quantity");
      } else if (state.cartItems[itemIndex].itemQuantity == 1) {
        const nextCartItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItem;
        localStorage.setItem(OTTO_CART_ITEMS, JSON.stringify(state.cartItems));
        toast.error(action.payload.name + " removed from cart");
      }
    },

    clearCart(state) {
      state.cartItems = [];
      localStorage.setItem(OTTO_CART_ITEMS, JSON.stringify(state.cartItems));
    },

    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, itemQuantity } = cartItem;
          const itemTotal = price * itemQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += itemQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export default cartSlice.reducer;

export const cartAction = {
  ...cartSlice.actions,
};

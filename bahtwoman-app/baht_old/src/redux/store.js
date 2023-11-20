import { configureStore } from "@reduxjs/toolkit";
import { authSlice, userSlice } from ".";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice
  },
});

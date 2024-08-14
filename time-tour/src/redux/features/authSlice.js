import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_PATH } from "../../tools/constant";
import { useNavigate } from "react-router-dom";
import { getText } from "../../locales";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    login(state, action) {
      const data = action.payload;
      console.log(data);

      axios
        .post(`${API_PATH}accounts/login/`, data)
        .then((response) => {
          console.log(response.data);
          localStorage.setItem("accessToken", response.data.token);
          window.location.href = "#/offers";
        })
        .catch((error) => {
          console.log(error);

          alert(getText("login_false"));
        });
    },

    register(state, action) {
      const data = action.payload;

      axios
        .post(`${API_PATH}accounts/register/`, data)
        .then((response) => {
          window.location.href = `#/verify`;

          localStorage.setItem("phone", data.phone);
          localStorage.setItem("password", data.password);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    confirmPassword(state, action) {
      const data = action.payload;

      axios
        .post(`${API_PATH}accounts/verify-register/`, data)
        .then((response) => {
          localStorage.removeItem("phone");
          localStorage.removeItem("password");
          window.location.href = `#/login`;
        })
        .catch((error) => {
          console.log(error);
          alert("password incorrect");
        });
    },
  },
});

export const { login, register, confirmPassword } = authSlice.actions;
export default authSlice.reducer;

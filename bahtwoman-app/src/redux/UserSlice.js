import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_PATH, CONFIG } from "../constants";
import axios from "axios";

const firstLastNameChange = createAsyncThunk(
  `user/firstLastNameChange`,
  async ({ name, surname, lastName }) => {
    const { data } = await axios.patch(
      API_PATH + "/user/user-rud/",
      {
        name,
        last_name: surname,
        given_name: lastName,
      },
      CONFIG
    );
  }
);

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const userAction = {
  ...userSlice.actions,
  firstLastNameChange,
};

export default userSlice.reducer;

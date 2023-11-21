import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_PATH } from "../constants";
import axios from "axios";

const initialState = {
  first_name: "",
  last_name: "",
  given_name: "",
  age: "",
  address: "",
  phone: "",
  eduction: "",
  family_status: "",
  children: "",
  social_status: "",
  account: "",
};

const registerQuestions = createAsyncThunk(
  `user/registerQuestions`,
  async () => {
    console.log(initialState);
    const { data } = await axios.post(
      API_PATH + "register-questions/question/",
      {}
    );
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setNames: (state, action) => {
      state.first_name = action.payload.name;
      state.last_name = action.payload.surname;
      state.given_name = action.payload.lastName;
    },
    setAges: (state, action) => {
      state.age = action.payload.age;
    },
    setLocation: (state, action) => {
      state.address = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phone = action.payload.phone;
    },
    setEdu: (state, action) => {
      state.eduction = action.payload.education;
    },
    setFamilyStatus: (state, action) => {
      state.family_status = action.payload.status;
    },
    setChild: (state, action) => {
      state.children = action.payload.children;
    },
    setSocialStatus: (state, action) => {
      state.social_status = action.payload.status;
    },
  },
});

export const userAction = {
  ...userSlice.actions,
  registerQuestions,
  //setNames,
  //firstLastNameChange,
};

export const {
  setNames,
  setAges,
  setLocation,
  setPhoneNumber,
  setEdu,
  setFamilyStatus,
  setChild,
  setSocialStatus,
} = userSlice.actions;

export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_PATH, USER_ID } from "../constants";
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
  userInfo: []
};

const registerQuestions = createAsyncThunk(
  `user/registerQuestions`,
  async ({user, status}) => {
    const { data } = await axios.post(
      API_PATH + "register-questions/question/",
      {
        first_name: user.first_name,
        last_name: user.last_name,
        given_name: user.given_name,
        age: user.age,
        address: user.address,
        phone: user.phone,
        eduction: user.eduction,
        family_status: user.family_status,
        children: user.children,
        social_status: status,
      }
    );
    
    localStorage.setItem(USER_ID, data.id)
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
    setUserInfo: (state, action) => {
      console.log(action);
      state.userInfo.push(action.payload.data) 
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(registerQuestions.fulfilled, (state,action) => {
    //   console.log(action.payload);
    // })
  }
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
  setUserInfo
} = userSlice.actions;

export default userSlice.reducer;
